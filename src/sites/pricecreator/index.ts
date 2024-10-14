import { setupButtons, setupHotkeys } from './utils/setup';
import waitDOM from './utils/wait/waitDOM';

waitDOM(() => {
	setupButtons();
	setupHotkeys();
});
