import { $ } from './selectors';
import { nodes, selectors } from './ui/nodes';

export const setupButtons = () => {
	// const buttons = [setParamButton];
	// waitDOMElement(selectors.navigation, () => {
	// 	nodes.navigation.append(...buttons);
	// });
};

export const setupHotkeys = () => {
	window.addEventListener('keydown', (e) => {
		if (location.href.includes('search')) {
			if (e.code === 'KeyA' && e.ctrlKey) {
				e.preventDefault();
				nodes.checkall.click();
			}
		}

		if (location.href.includes('edit')) {
			if (e.code === 'KeyS' && e.ctrlKey) {
				e.preventDefault();
				$(selectors.saveButton).click();
			}
		}
	});
};
