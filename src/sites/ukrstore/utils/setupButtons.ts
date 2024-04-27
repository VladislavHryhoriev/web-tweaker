import { proccessButton } from '../ui/proccessButton';
import { selectForbbidenButton } from '../ui/selectForbbidenButton';
import { $ } from './selectors';

const menu = $('.form-inline');

export const setupButtons = () => {
	const buttons = [selectForbbidenButton, proccessButton];
	menu.append(...buttons);
};
