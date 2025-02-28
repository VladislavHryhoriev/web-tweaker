import { $ } from '../selectors';

export const selectors = {
	menu: '.at9',
	title: '.bog',
	elements: '.zA.zE',
	check: '.T-Jo-auh',
	markAsReadButton: '[data-tooltip="Отметить как прочитанное"] .asa.KCRnif',
};

export const nodes = {
	get menu() {
		return $(selectors.menu);
	},
	get title() {
		return $(selectors.title);
	},
	get elements() {
		return $(selectors.elements);
	},
	get check() {
		return $(selectors.check);
	},
	get markAsReadButton() {
		return $(selectors.markAsReadButton);
	},
};
