import { $, $all } from '../selectors';

export const selectors = {
	navigation: '#navigation',
	checkall: '#checkall',
	productsList: '#datatable > tbody > tr',
	saveButton: 'button[value="save"]',
};

export const nodes = {
	get navigation() {
		return $(selectors.navigation);
	},
	get checkall() {
		return $(selectors.checkall);
	},
	get productsList() {
		return $all(selectors.productsList);
	},
	get saveButton() {
		return $(selectors.saveButton);
	},
};
