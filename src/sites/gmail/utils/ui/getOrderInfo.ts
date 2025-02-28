import createButton from '../create/createButton';
import { selectors } from './nodes';

const handler = () => {
	const elements = document.querySelectorAll(selectors.elements);

	const filtered = [...elements].filter((node) => {
		const title = node.querySelector(selectors.title)?.textContent;
		return title?.includes('Надійшло замовлення');
	});

	filtered.forEach((node) => {
		(node.querySelector(selectors.check) as HTMLInputElement).click();
	});
};

export const clearOrdersButton = createButton({
	title: 'Выбрать заказы',
	className: 'clear-orders',
	handler,
});
