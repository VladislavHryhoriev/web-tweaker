import { $, $all } from './utils/selectors';
import waitDOM from './utils/waitDOM';

const ui = {
	get acceptCallButton() {
		return $('#phone_call_1') as HTMLLinkElement;
	},
	get rejectCallButton() {
		return $('#phone_hangup_1') as HTMLLinkElement;
	},
};

waitDOM(() => {
	document.addEventListener('keydown', (e: KeyboardEvent) => {
		if (e.altKey && e.key === '+') {
			ui.acceptCallButton.click();
		}

		if (e.altKey && e.key === '-') {
			ui.rejectCallButton.click();
		}

		if (e.key === 'Escape') {
			$all('.modal button[data-card-id]').forEach((node) => node.click());
		}
	});
});
