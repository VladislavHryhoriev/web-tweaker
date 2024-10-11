import { setupButtons, setupHotkeys } from './utils/setup';
import waitDOM from './utils/wait/waitDOM';

waitDOM(() => {
	if (location.href.includes('search')) {
		setupButtons();
		setupHotkeys();
	}
});
