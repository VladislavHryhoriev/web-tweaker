import createButton from '../utils/create/createButton';
import { nodes } from './nodes';

interface Data {
	orderId: string;
	client: {
		firstName: string;
		lastName: string;
		patronymic: string;
		phone: string;
	};
	delivery: {
		provider: string;
		city: string;
		warehouse: string;
		note: string;
	};
	products: { article: string; amount: string }[];
	total: string;
}

const copyData = ({ orderId, client, delivery, products, total }: Data) => {
	let text = '';

	if (nodes.orderStatus.includes('Нове')) {
		text = `
		Епіцентр
		● ${orderId}
		● ${products.map(({ article, amount }) => `${article} ${amount}`)} = ${total}`
			.replace(/\s+/g, ' ')
			.trim();
	} else {
		text = `
		Епіцентр
		● ${orderId}
		● ${client?.lastName} ${client?.firstName} ${client?.patronymic}
		● ${client?.phone}
		● ${delivery?.provider}
		● ${delivery?.city}
		● ${delivery?.warehouse}
		>> ${delivery?.note}`
			.replace(/\s+/g, ' ')
			.trim();
	}

	navigator.clipboard.writeText(text);
};

const getOrderInfo = () => {
	try {
		const products = [];

		for (const node of nodes.products) {
			const inputElement = node.querySelector(
				'input[type="number"]'
			) as HTMLInputElement;
			const inputValue =
				inputElement?.value ||
				parseInt(
					node.querySelector('.number-change')?.textContent?.replace(/[^\d]/g, '') ||
						'0',
					10
				);

			products.push({
				article:
					node.querySelector('.item-sku')?.textContent?.trim()?.split(' ')[1] || '',
				amount: `${inputValue}шт`,
				price:
					node.querySelector('.item-amount')?.textContent?.trim().split(' ')[0] ||
					'',
			});
		}

		const form = {
			orderId: nodes.orderId,
			products: products,
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
				ttn: nodes.ttn,
				note: nodes.note,
			},
		};

		copyData(form);
	} catch (error) {
		console.error(error);
	}
};

export const getOrderInfoButton = createButton({
	title: 'Проверить товар',
	className: 'get-info',
	handler: getOrderInfo,
});
