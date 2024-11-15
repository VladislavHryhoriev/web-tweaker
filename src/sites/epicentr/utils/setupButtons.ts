import { getOrderInfoButton } from './ui/getOrderInfo';

const menu = document.createElement('div');
menu.classList.add('local-menu');
menu.style.cssText = `
		display: flex;
		position: absolute;
		left: calc(50% - (177px / 2));
		bottom: 10px;
`;

export const setupButtons = () => {
	const buttons = [getOrderInfoButton];
	menu.append(...buttons);

	document.body.append(menu);
};

export const setupHotkeys = () => {
	// window.addEventListener('keydown', (e) => {});
};
