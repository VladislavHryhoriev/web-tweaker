import createButton from '../create/createButton';
import { $text, $value } from '../selectors';
import { nodes } from './nodes';

const getOrderInfo = () => {
	const form = {
		orderId: nodes.orderId,
		// products: products,
		total: nodes.total,
		client: {
			firstName: nodes.firstName,
			lastName: nodes.lastName,
			patronymic: nodes.patronymic,
			phone: nodes.phone,
			email: nodes.email,
		},
		delivery: {
			provider: nodes.provider,
			city: nodes.city,
			warehouse: nodes.warehouse,
			ttn: $value('input[formcontrolname="number"]').replace(' ', ''),
			note: $text('.commentary-field > div'),
		},
	};
};

export const getOrderInfoButton = createButton({
	title: 'Проверить товар',
	className: 'setStatus',
	handler: getOrderInfo,
});
