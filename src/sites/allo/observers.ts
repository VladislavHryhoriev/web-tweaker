import { selectors } from './ui/nodes';
import { $style } from './utils/selectors';
import setupButtons from './utils/setupButtons';

const url = {
	get active() {
		return location.href.includes('show') || location.href.includes('edit');
	},
};

const observers = () => {
	const initialObserver = new MutationObserver(() => {
		if (!url.active) return;

		setupButtons();
		initialObserver.disconnect();
	});
	const observerUrl = new MutationObserver(() => {
		url.active
			? ($style(selectors.mainButton).display = 'flex')
			: ($style(selectors.mainButton).display = 'none');
	});

	initialObserver.observe(document.body, { childList: true, subtree: true });
	observerUrl.observe(document.body, { childList: true, subtree: true });
};

export default observers;
