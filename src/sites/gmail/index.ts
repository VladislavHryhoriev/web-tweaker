import { selectors } from './ui/nodes';
import { setupButtons } from './utils/setupButtons';
import waitDOMElement from './utils/wait/waitDOMElement';

waitDOMElement(selectors.menu, () => {
	setupButtons();
});
