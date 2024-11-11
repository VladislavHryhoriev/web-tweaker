import { nodes, selectors } from './ui/nodes';
import { setStatusButtonAPI } from './ui/setStatusButtonAPI';
import waitDOMElement from './wait/waitDOMElement';

const findOrder = (e: KeyboardEvent) => {
	e.preventDefault();
	const input = nodes.searchInput as HTMLInputElement;

	input.focus();
	input.select();
	navigator.clipboard
		.readText()
		.then((text) => (input.value = text))
		.catch((err) => console.error('Не удалось вставить текст из буфера:', err));
};

export const setupButtons = () => {
	const buttons = [setStatusButtonAPI];

	waitDOMElement(selectors.menuButtons, () => {
		nodes.menuButtons.append(...buttons);
	});
};

export const setupHotkeys = () => {
	window.addEventListener('keydown', (e: KeyboardEvent) => {
		if (e.code === 'Slash') findOrder(e);
	});
};
