import { $, $all, $children } from './selectors';

export const list = {
	get length() {
		return $('.j-mass-total').textContent;
	},
	set length(value) {
		$('.j-mass-total').textContent = value;
	},
	get totalSelected() {
		const value = $all('.j-mass-check-item:checked').length.toString();
		return value;
	},
	get all() {
		return [...$children('.j-list-body')];
	},
	updateTotal() {
		const value = $all('.j-mass-check-item:checked').length.toString();
		$('.j-mass-total').textContent = value;
	},
	showModMenu() {
		return $('.c-actions-panel').classList.remove('hide');
	},
	hideModMenu() {
		return $('.c-actions-panel').classList.add('hide');
	},
};
