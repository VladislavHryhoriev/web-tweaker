export default function waitDOM(callback: Function) {
	const intervalId = setInterval(() => {
		if (document.readyState === 'complete') {
			clearInterval(intervalId);
			callback();
		}
	}, 100);
}
