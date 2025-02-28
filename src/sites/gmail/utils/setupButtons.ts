import { $ } from './selectors';
import { clearOrdersButton } from './ui/getOrderInfo';
import { selectors } from './ui/nodes';

export const setupButtons = () => {
	const menu = $(selectors.menu);
	const buttons = [clearOrdersButton];
	menu.append(...buttons);
};
