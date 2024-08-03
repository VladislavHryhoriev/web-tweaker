import { nodes, selectors } from './ui/nodes';
import { setStatusButton } from './ui/setStatusButton';
import waitDOMElement from './wait/waitDOMElement';

export const setupButtons = () => {
	const buttons = [setStatusButton];

	waitDOMElement(selectors.menuButtons, () => {
		nodes.menuButtons.append(...buttons);
	});
};

export const setupHotkeys = () => {
	window.addEventListener('keydown', (e) => {
		if (e.key === '/' && document.activeElement !== nodes.searchInput) {
			e.preventDefault();
			nodes.searchInput.focus();
		}
	});
};
