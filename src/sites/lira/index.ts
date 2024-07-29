import { $ } from './utils/selectors';
import waitDOM from './utils/waitDOM';

const ui = {
	get acceptCallButton() {
		return $('#phone_call_1') as HTMLLinkElement;
	},
	get rejectCallButton() {
		return $('#phone_hangup_1') as HTMLLinkElement;
	},

	get modal() {
		return $('#edit_contact_new_0') as HTMLDivElement;
	},
	get modalClose() {
		return $('#edit_contact_new_0 button[data-card-id="0"]') as HTMLButtonElement;
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

		if (ui.modal) {
			if (ui.modal.style.display === 'block' && e.key === 'Escape') {
				ui.modalClose.click();
			}
		}
	});
});
