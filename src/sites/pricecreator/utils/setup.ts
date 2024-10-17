import { $ } from './selectors';
import { selectors } from './ui/nodes';

export const setupButtons = () => {
	// const buttons = [setParamButton];
	// waitDOMElement(selectors.navigation, () => {
	// 	nodes.navigation.append(...buttons);
	// });
};

export const setupHotkeys = () => {
	window.addEventListener('keydown', (e) => {
		if (location.href.includes('edit')) {
			if (e.ctrlKey && e.code === 'KeyS') {
				e.preventDefault();
				$(selectors.saveButton).click();
			}
		}
	});
};
