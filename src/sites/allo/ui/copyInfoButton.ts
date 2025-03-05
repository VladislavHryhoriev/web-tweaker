import createButton from '../utils/create/createButton';
import selectByText from '../utils/selectByText';
import { $name } from '../utils/selectors';

interface FormData {
	main: {
		id: string;
		note: string;
	};
	delivery: {
		name: string;
		number: string;
		city: string;
		address: string;
		street: string;
		house: string;
		apartment: string;
		provider: string;
	};
	products: {
		quantity: string;
		article: string;
		price: string;
	}[];
	total: number;
}

const form: FormData = {
	main: {
		id: '',
		note: '',
	},
	delivery: {
		name: '',
		number: '',
		city: '',
		address: '',
		street: '',
		house: '',
		apartment: '',
		provider: '',
	},
	products: [],
	total: 0,
};

const handler = () => {
	try {
		const tabs = {
			main: selectByText('Загальна інформація', 'button'),
			delivery: selectByText('Оплата і доставка', 'button'),
			products: selectByText('Товари', 'button'),
		};

		//
		tabs.main.click();
		form.main.id = $name('orderFormIdMagentoOrder');
		form.main.note = $name('orderFormNote');

		// delivery
		tabs.delivery.click();
		form.delivery.name = $name('orderFormCustomerName');
		form.delivery.number = $name('orderFormCustomerPhone')
			.toString()
			.replace('+38', '');
		form.delivery.city = $name('orderFormShippingCity');
		form.delivery.address = $name('orderFormStockName');
		form.delivery.street = $name('orderFormShippingStreet');
		form.delivery.house = $name('orderFormShippingHouse');
		form.delivery.apartment = $name('orderFormShippingApartment');
		form.delivery.provider = $name('orderFormShippingType');

		// products
		tabs.products.click();
		const trNodes = [] as { quantity: string; article: string; price: string }[];

		setTimeout(() => {
			const nodes = [
				...document.querySelectorAll<HTMLTableRowElement>('tbody > tr'),
			];
			let total = 0;

			for (const node of nodes) {
				// const position = node.cells[0].textContent;
				const quantity = node.cells[1].textContent!;
				// const name = node.cells[2].textContent;
				const article = node.cells[5].textContent!.split('-')[0];
				const price = node.cells[6].textContent!.split('.')[0];

				trNodes.push({ quantity, article, price });
				total = total + Number(price);
			}

			form.products = trNodes;
			form.total = total;

			const text = `
				Алло
				● ${form.main.id}
				● ${form.products.map(({ article, quantity }) => ` ${article} - ${quantity}шт`)}
				= ${form.total}грн
				● ${form.delivery.name}
				● ${form.delivery.number}
				● ${form.delivery.city ? form.delivery.city : 'Город не указан'}
				● ${
					form.delivery.address
						? form.delivery.address
						: `
						${form.delivery.street ? ' Адресная: ' + form.delivery.street : ''}
						${form.delivery.house ? 'буд. ' + form.delivery.house : ''}
						${form.delivery.apartment ? 'кв. ' + form.delivery.apartment : ''}`
				}
					 ● ${form.delivery.provider}
					 >> ${form.main.note}`
				.replace(/\s+/g, ' ')
				.trim();

			navigator.clipboard.writeText(text);

			tabs.main.click();
		}, 100);
	} catch (error) {
		console.error(error);
		alert('Ошибка копирования, откройте заказ через редактирование!');
	}
};

const copyInfoButton = createButton({
	title: 'Скопировать информацию',
	className: 'copyInfo',
	handler,
	absolute: true,
});

export default copyInfoButton;
