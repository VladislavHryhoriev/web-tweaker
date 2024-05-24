import createButton from '../utils/create/createButton';
import { getElementByText } from '../utils/getElementByText';

const getText = (text: string) => {
	console.log(getElementByText(text)?.nextSibling?.textContent?.trim());

	return getElementByText(text)?.nextSibling?.textContent?.trim();
};

export const copyInfo = () => {
	const words = [] as string[];

	const node =
		getElementByText('Адрес доставки') || getElementByText('Адреса доставки');

	node
		.closest('thead')
		?.nextElementSibling?.children[0].children[1].childNodes.forEach((node) => {
			words.push(node.textContent as string);
		});

	const nodes = (
		getElementByText('Товар').closest('thead')
			?.nextElementSibling as HTMLTableElement
	)?.children;

	const products = [...nodes]
		.map((node) => {
			return {
				article: node.children[1].textContent,
				amount: node.children[2].textContent,
			};
		})
		.map(({ article, amount }) => `[${article} ${amount}шт]`)
		.join(' ');

	const form = {
		id: getText('№ замовлення:'),
		payType: getText('Спосіб оплати:'),
		deliveryType: getText('Спосіб доставки:'),
		clientType: getText('Телефон:') ? `Дроп: ${getText('Телефон:')}` : 'Не дроп',
		deliveryInfo: words.filter((word) => word !== '').join(' '),
		total: (getElementByText('Всього:') || getElementByText('Итого:')).parentElement
			?.nextElementSibling?.textContent,
		products: products,
		comment: getElementByText('Інструкції')
			? getElementByText('Інструкції').closest('thead')?.nextElementSibling
					?.textContent
			: '',
	};

	const str =
		form?.id +
		' ● ' +
		form?.comment +
		' ● ' +
		form?.products +
		' ● ' +
		form?.total +
		' ● ' +
		form?.deliveryInfo +
		' ● ' +
		form?.payType +
		' ● ' +
		form?.clientType +
		' ● ' +
		form?.deliveryType;

	navigator.clipboard.writeText(str.replace(/\s+/g, ' ').trim());
};

export const copyButton = createButton({
	title: 'Скопировать информацию',
	className: 'copyInfo',
	handler: copyInfo,
});
