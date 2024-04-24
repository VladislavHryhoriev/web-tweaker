import { $text } from './selectors';

export const copyText = (selector: string) => {
	const text = $text(selector);
	navigator.clipboard.writeText(text);
};
