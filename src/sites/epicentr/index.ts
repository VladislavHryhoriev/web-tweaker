import { nodes, selectors } from './ui/nodes';
import { $, $style } from './utils/selectors';
import { setupButtons } from './utils/setupButtons';

const observer = new MutationObserver(() => {
	if (!location.href.includes('orders')) return;

	setupButtons();
	observer.disconnect();
});

const observeUrl = new MutationObserver(() => {
	const url = location.href;

	if (!url.includes('orders')) return;

	nodes.getOrderInfoButton.value =
		nodes.orderStatus === 'Нове' ? 'Проверить товар' : 'Скопировать для 1c';

	$style(selectors.menu).display =
		url.includes('orders') && url.split('/').length > 5 ? 'flex' : 'none';
});

const start = () => {
	observer.observe($('body'), { childList: true, subtree: true });
	observeUrl.observe($('body'), { childList: true, subtree: true });
};

start();
