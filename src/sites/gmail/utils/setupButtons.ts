import { copyButton } from '../ui/copyInfoButton';
import { selectors } from '../ui/nodes';
import { $$ } from './selectors';

export const setupButtons = () => {
	const buttons = [copyButton];
	$$(selectors.menu).append(...buttons);
};
