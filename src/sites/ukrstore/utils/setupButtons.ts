import { proccessButton } from '../ui/proccessButton';
import { selectForbbidenButton } from '../ui/selectForbbidenButton';
import { $ } from './selectors';

export const setupButtons = () => {
	const menu = $('.form-inline');
	const buttons = [selectForbbidenButton, proccessButton];
	menu.append(...buttons);
};
