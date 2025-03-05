import { $ } from '../utils/selectors';

export const selectors = {
	mainButton: '.copyInfo',
};

export const nodes = {
	get mainButton() {
		return $(selectors.mainButton);
	},
};
