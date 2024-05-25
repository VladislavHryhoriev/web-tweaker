import { copyButton } from './ui/copyInfoButton';
import { selectors } from './ui/nodes';
import { $$ } from './utils/selectors';
import waitDOMElement from './utils/wait/waitDOMElement';

waitDOMElement(selectors.menu, () => {
	if (!$$('.copyInfo')) {
		$$(selectors.menu).append(copyButton);
	}
});
