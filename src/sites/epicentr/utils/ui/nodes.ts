import { $ } from '../selectors';

export const selectors = {
	address: '#test',
};

export const nodes = {
	get address() {
		return $(selectors.address);
	},
};
