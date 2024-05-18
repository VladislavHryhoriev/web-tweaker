export default function waitForUpdateURL(param: string, callback: Function) {
	const url = location.href;

	const intervalId = setInterval(() => {
		if (url !== location.href || url.includes(param)) {
			clearInterval(intervalId);
			callback();
		}
	}, 200);
}
