import createButton from '../create/createButton';
import { $ } from '../selectors';
import { nodes } from './nodes';

const setStatus = () => {
	const list = nodes.productList as HTMLTableElement;
	list.querySelectorAll('[data-test="order-block"]').forEach((node) => {
		const status = list.querySelector('.but-order--status') as HTMLButtonElement;

		if (node.textContent?.includes('Нове замовлення')) {
			status.click();

			setTimeout(() => {
				$('input[value="26"]').click();
			}, 20);
			setTimeout(() => {
				$('[data-test="order-change"]').click();
			}, 20);
		}
	});
};

export const setStatusButton = createButton({
	title: 'Кинуть в обработку',
	className: 'setStatus',
	handler: setStatus,
});
