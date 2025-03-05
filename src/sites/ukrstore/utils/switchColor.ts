import { $ } from './selectors';

export const switchColor = {
	_intervalId: 0,
	_temp: $('[rel="icon"]')!.getAttribute('href') || '',
	_iconElement: $('[rel="icon"]') as HTMLLinkElement,
	_active: false,

	run() {
		if (this._active) return;
		this._active = true;

		let flag = false;

		this._intervalId = setInterval(() => {
			const circle = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='${
				flag ? 'red' : 'blue'
			}' /%3E%3C/svg%3E`;

			this._iconElement.setAttribute('href', circle);
			flag = !flag;
		}, 1000);
	},

	stop() {
		if (!this._active) return;
		clearInterval(this._intervalId);
		this._intervalId = 0;
		this._iconElement.setAttribute('href', this._temp);
		this._active = false;
	},
};
