import { nodes, selectors } from './ui/nodes';
import { setStatusButton } from './ui/setStatusButton';
import waitDOMElement from './wait/waitDOMElement';

export const setupButtons = () => {
	const buttons = [setStatusButton];

	waitDOMElement(selectors.menuButtons, () => {
		nodes.menuButtons.append(...buttons);
	});
};
