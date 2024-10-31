import { copyIndexesButton } from '../ui/copyIndexesButton';
import { $ } from './selectors';
import waitDOMElement from './wait/waitDOMElement';

export const setupButtons = () => {
	waitDOMElement('.row.whiteBase', () => {
		const menu = $('.row.whiteBase');

		const buttons = [copyIndexesButton];
		menu.append(...buttons);
	});
};
