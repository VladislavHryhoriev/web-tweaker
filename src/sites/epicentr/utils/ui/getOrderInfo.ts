import createButton from '../create/createButton';

const getOrderInfo = () => {};

export const getOrderInfoButton = createButton({
	title: 'Проверить товар',
	className: 'setStatus',
	handler: getOrderInfo,
});
