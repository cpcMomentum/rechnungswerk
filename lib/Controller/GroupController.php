<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Controller;

use OCA\Rechnungswerk\AppInfo\Application;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\IGroupManager;
use OCP\IRequest;

class GroupController extends Controller {

    public function __construct(
        IRequest $request,
        private readonly ?string $userId,
        private readonly IGroupManager $groupManager,
    ) {
        parent::__construct(Application::APP_ID, $request);
    }


    #[NoAdminRequired]
    public function index(): DataResponse {

        if ($this->userId === null) {
            return new DataResponse([
                'error' => 'Not authenticated'
            ], 401);
        }


        $groups = [];

        foreach ($this->groupManager->search('') as $group) {

            $groups[] = [
                'id' => $group->getGID(),
                'displayName' => $group->getGID(),
            ];
        }


        return new DataResponse([
            'groups' => $groups
        ]);
    }
}