import createButton from '../create/createButton';
import { $ } from '../selectors';
import { nodes } from './nodes';

const setStatus = () => {
	const list = nodes.productList as HTMLTableElement;
	// list.querySelector('[data-test="order-block"]').forEach((node) => {
	// node. => list.querySelector
	const status = list.querySelector('.but-order--status') as HTMLButtonElement;

	if (status.textContent?.includes('Нове замовлення')) {
		status.click();

		setTimeout(() => {
			$('input[value="26"]').click();
		}, 20);
		setTimeout(() => {
			$('[data-test="order-change"]').click();
		}, 20);
	}
	// });
};

export const setStatusButton = createButton({
	title: 'Кинуть в обработку',
	className: 'setStatus',
	handler: setStatus,
});
