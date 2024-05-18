import { copyInfoButton } from '../ui/copyInfoButton';
import { getElementByText } from './getElementByText';

export const setupButtons = () => {
	const menu = getElementByText('Редагування замовлення');
	const buttons = [copyInfoButton];
	menu.append(...buttons);
};
