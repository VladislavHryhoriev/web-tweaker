import { $ } from '../selectors';

export const selectors = {
	address: '#flatPlace',
	recipientName: '#recipientDataCopy',
	recipientPhone: '#recipientPhoneCopy',
	usersBox: '.detail-box--body',
	paymentStatus: '.payment-status.paid',
	paid: '.invoices_item--status.paid',
	rating: '.has--present',
	lvlHigh: '.level-3',
	lvlMedium: '.level-2',
	lvlLow: '.level-1',
	orderBox: '.order-detail--body',
	menuButtons: '.filter-data',
	productList: '.mdc-data-table__content',
	searchInput: 'input[formcontrolname="searchNumber"]',
};

export const nodes = {
	get address() {
		return $(selectors.address);
	},
	get recipientName() {
		return $(selectors.recipientName);
	},
	get recipientPhone() {
		return $(selectors.recipientPhone);
	},
	get usersBox() {
		return $(selectors.usersBox);
	},
	get paid() {
		return $(selectors.paid);
	},
	get paymentStatus() {
		return $(selectors.paymentStatus);
	},
	get rating() {
		return $(selectors.rating);
	},
	get lvlHigh() {
		return $(selectors.lvlHigh);
	},
	get lvlMedium() {
		return $(selectors.lvlMedium);
	},
	get lvlLow() {
		return $(selectors.lvlLow);
	},
	get orderBox() {
		return $(selectors.orderBox);
	},
	get menuButtons() {
		return $(selectors.menuButtons);
	},
	get productList() {
		return $(selectors.productList);
	},
	get searchInput() {
		return $(selectors.searchInput);
	},
};
