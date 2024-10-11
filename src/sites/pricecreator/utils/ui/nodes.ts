import { $, $all } from '../selectors';

export const selectors = {
	navigation: '#navigation',
	checkall: '#checkall',
	productsList: '#datatable > tbody > tr',
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
};
