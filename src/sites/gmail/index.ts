import { copyButton } from './ui/copyInfoButton';
import { selectors } from './ui/nodes';
import { $$ } from './utils/selectors';
import waitDOMElement from './utils/wait/waitDOMElement';

const t = new Date(1716623937023).getTime();
const r = new Date('2024-06-5').getTime();

if (r > t) {
	waitDOMElement(selectors.menu, () => {
		if (!$$('.copyInfo')) {
			$$(selectors.menu).append(copyButton);
		}
	});
}
