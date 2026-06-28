<?php

declare(strict_types=1);

/**
 * Minimal stubs for private OC\* symbols that the nextcloud/ocp public-API
 * definitions still reference (e.g. OCP\Files\IRootFolder extends the private
 * OC\Hooks\Emitter). These are NOT used by the app code (which is OCP-only);
 * they exist purely so the ocp stub classes parse during container-free unit
 * tests. An empty interface is sufficient for `extends`/`implements` to resolve.
 */

namespace OC\Hooks {
	if (!interface_exists(Emitter::class)) {
		interface Emitter {
		}
	}
}
