import { $, $all, $text, $value } from '../selectors';

export const selectors = {
	orderId: '.order-title',
	products: '.order-products-list > *',
	total: '.total',

	firstName: 'input[formcontrolname="firstName"]',
	lastName: 'input[formcontrolname="lastName"]',
	patronymic: 'input[formcontrolname="patronymic"]',
	phone: 'input[formcontrolname="phone"]',
	email: 'input[formcontrolname="email"]',

	provider: '.selected-provider',
	city: '[formcontrolname="settlement"] input',
	warehouse: '[formcontrolname="office"] textarea',
	ttn: 'input[formcontrolname="number"]',

	note: '.commentary-field > div',

	orderStatus: '.order-status',

	// buttons
	menu: '.local-menu',
	getOrderInfo: '.get-info',
};

export const nodes = {
	get orderId() {
		return $text(selectors.orderId).split(' ')[1];
	},
	get total() {
		return $text(selectors.total).split(' ')[3];
	},

	get firstName() {
		return $value(selectors.firstName);
	},
	get lastName() {
		return $value(selectors.lastName);
	},
	get patronymic() {
		return $value(selectors.patronymic);
	},
	get phone() {
		return $value(selectors.phone).replace('+38', '').replace(/[^\d]/g, '');
	},
	get email() {
		return $value(selectors.email);
	},

	get provider() {
		return $text(selectors.provider);
	},
	get city() {
		return $value(selectors.city);
	},
	get warehouse() {
		return $value(selectors.warehouse);
	},
	get ttn() {
		return $value(selectors.ttn).replace(' ', '');
	},

	get note() {
		return $text(selectors.note);
	},

	get products() {
		return [...$all(selectors.products)];
	},

	get orderStatus() {
		return $text(selectors.orderStatus);
	},

	// buttons
	get menu() {
		return $(selectors.menu);
	},
	get getOrderInfoButton() {
		return $(selectors.getOrderInfo) as HTMLInputElement;
	},
};
