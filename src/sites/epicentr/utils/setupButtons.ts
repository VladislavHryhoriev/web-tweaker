import { $ } from './selectors';
import { getOrderInfoButton } from './ui/getOrderInfo';
import waitDOMElement from './wait/waitDOMElement';

export const setupButtons = () => {
	waitDOMElement('.row.whiteBase', () => {
		const menu = $('.row.whiteBase');

		const buttons = [getOrderInfoButton];
		menu.append(...buttons);
	});
};

export const setupHotkeys = () => {
	// window.addEventListener('keydown', (e: KeyboardEvent) => {
	// });
};
