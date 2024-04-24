import { $ } from './selectors';

export default function waitLoading(callback: Function) {
	console.log('loading...');

	const intervalId = setInterval(() => {
		if (!$('.spinner-container')) {
			console.log('true');
			clearInterval(intervalId);
			callback();
		}
	}, 100);
}
