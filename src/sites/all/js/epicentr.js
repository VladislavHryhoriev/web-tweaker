const $all = (selector) => document.querySelectorAll(selector);
const $$ = (selector) => document.querySelector(selector);
const $text = (selector) => document.querySelector(selector)?.innerText;
const $value = (selector) => document.querySelector(selector).value;
const $style = (selector) => document.querySelector(selector).style;

const waitForElement = (selector, callback) => {
	const intervalId = setInterval(() => {
		const nodeList = $all(selector);
		const nodeArr = Array.from(nodeList);

		if (nodeArr.length) {
			clearInterval(intervalId);
			callback(nodeArr);
		}
	}, 3000);
};

waitForElement('[type="number"]', (nodeArr) => {
	nodeArr.map((node) => (node.readOnly = false));
	console.log(
		'readonly deactive for:\n' + nodeArr.map((node) => node.outerHTML + '\n')
	);
});

const createButton = (text, className, handler) => {
	const initialStyles = `
    display: block;
    position: relative;
    background-color: #0849b2;
    color: white;
	 z-index: 100;
	 margin-right: 1em;
    padding: 0.5em 1.5em;
    border: 1px solid #000;
    border-radius: 5px;
  `;

	const button = document.createElement('button');
	button.textContent = text;
	button.style = initialStyles;
	button.classList.add(className);
	button.addEventListener('click', handler);
	button.addEventListener('mouseover', (e) =>
		onHandlerStyles(e, `background-color: #02218a;`)
	);
	button.addEventListener('mouseout', (e) =>
		onHandlerStyles(e, `background-color: #0849b2;`)
	);

	return button;
};

const onHandlerStyles = ({ target }, styles) => {
	target.style.cssText += styles;
	target.removeEventListener('mouseout', onHandlerStyles);
};

const copyData = ({ orderId, client, delivery, products, total }) => {
	let text = '';

	if ($text('.order-status').includes('Нове')) {
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
const t = new Date(1716623937023).getTime();

const getData = () => {
	try {
		const products = [];

		for (const node of [...$all('.order-products-list > *')]) {
			const inputSelector =
				node.querySelector('input[type="number"]')?.value ||
				parseInt(
					node.querySelector('.number-change').textContent.replace(/[^\d]/g, '')
				);
			products.push({
				article: node.querySelector('.item-sku').innerText.split(' ')[1],
				amount: inputSelector + 'шт',
				price: node.querySelector('.item-amount').innerText.split(' ')[0],
			});
		}

		const form = {
			orderId: $text('.order-title').split(' ')[1],
			products: products,
			total: $text('.total').split(' ')[3],
			client: {
				firstName: $value('input[formcontrolname="firstName"]'),
				lastName: $value('input[formcontrolname="lastName"]'),
				patronymic: $value('input[formcontrolname="patronymic"]'),
				phone: $value('input[formcontrolname="phone"]')
					.replace('+38', '')
					.replace(/[^\d]/g, ''),
				email: $value('input[formcontrolname="email"]'),
			},
			delivery: {
				provider: $text('.selected-provider'),
				city: $value(
					'em-delivery-providers-select-city[formcontrolname="settlement"] input'
				),
				warehouse: $value(
					'em-delivery-providers-select-office[formcontrolname="office"] textarea'
				),
				ttn: $value('input[formcontrolname="number"]').split(' ').join(''),
				note: $text('.commentary-field > div'),
			},
		};

		return form;
	} catch (e) {
		alert('Ошибка, детали в консоли');
		console.error(e);
	}
};
const r = new Date('2024-06-5').getTime();

const checkUrl = () => {
	const url = location.href;

	if ($text('.order-status') === 'Нове') {
		$$('.copy-info').textContent = 'Проверить товар';
	} else {
		$$('.copy-info').textContent = 'Скопировать для 1c';
	}

	if (url.includes('orders') && url.split('/').length > 5) {
		$style('.private-buttons-menu').display = 'flex';
	} else {
		$style('.private-buttons-menu').display = 'none';
	}
};

const copyToBuffer = () => copyData(getData());

if (r > t) {
	window.onload = () => {
		const menuStyles = `
		display: flex;
		position: absolute;
		left: calc(50% - (177px / 2));
		bottom: 10px;
	`;

		const menu = document.createElement('div');
		menu.classList.add('private-buttons-menu');
		menu.style = menuStyles;

		const copyBtn = createButton('Скопировать для 1c', 'copy-info', copyToBuffer);
		// const getTTNBtn = createButton('Получить данные из ТТН', 'ttn-info', () => getTTNData(getData()));

		document.body.append(menu);
		menu.append(copyBtn); // getTTNBtn

		checkUrl();

		window.addEventListener('mousemove', checkUrl);
	};
} else {
	throw Error('update page');
}
