import { $ } from '../selectors';

export default function waitDOMElement(selector: string, callback: Function) {
	const intervalId = setInterval(() => {
		const node = $(selector);
		if (node) {
			clearInterval(intervalId);
			callback(node);
		}
	}, 100);
}
