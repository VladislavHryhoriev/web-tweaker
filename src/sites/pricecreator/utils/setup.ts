import { nodes } from './ui/nodes';

export const setupButtons = () => {
	// const buttons = [setParamButton];
	// waitDOMElement(selectors.navigation, () => {
	// 	nodes.navigation.append(...buttons);
	// });
};

export const setupHotkeys = () => {
	window.addEventListener('keydown', (e) => {
		if (location.href.includes('search')) {
			if (e.key === 'a' && e.ctrlKey) {
				e.preventDefault();
				nodes.checkall.click();
			}
		}
	});
};
