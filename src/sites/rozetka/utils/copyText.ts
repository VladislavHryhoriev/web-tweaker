import { $text } from './selectors';

export const copyText = (selector: string | HTMLElement) => {
	if (typeof selector === 'string') {
		const text = $text(selector)?.trim() || '';
		navigator.clipboard.writeText(text);
	}

	if (typeof selector === 'object') {
		const text = selector.textContent?.trim() || '';
		navigator.clipboard.writeText(text);
	}
};
