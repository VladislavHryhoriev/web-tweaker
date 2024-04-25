import { $text } from './selectors';

export const copyText = (selector: string) => {
	const text = $text(selector).trim();
	navigator.clipboard.writeText(text);
};
