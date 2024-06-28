import { $ } from './utils/selectors';
import waitDOM from './utils/wait/waitDOM';

let flag = false;

const switchColor = () => {
	flag = !flag;

	const red = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='${
		flag ? 'red' : 'blue'
	}' /%3E%3C/svg%3E`;

	return flag ? red : red;
};

waitDOM(() => {
	if (location.href.includes('u/0')) {
		setInterval(() => {
			const iconElement = $('[rel="icon"]') as HTMLLinkElement;
			if (!iconElement.href.includes('0.png')) {
				iconElement.setAttribute('href', switchColor());
			}
		}, 5000);
	}
});
