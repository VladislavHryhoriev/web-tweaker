const $all = (e) => document.querySelectorAll(e),
	$$ = (e) => document.querySelector(e),
	$text = (e) => document.querySelector(e)?.innerText,
	$value = (e) => document.querySelector(e).value,
	$style = (e) => document.querySelector(e).style,
	waitForElement = (e, o) => {
		let l = setInterval(() => {
			let n = $all(e),
				a = Array.from(n);
			a.length && (clearInterval(l), o(a));
		}, 3e3);
	};
waitForElement('[type="number"]', (e) => {
	e.map((e) => (e.readOnly = !1)),
		console.log('readonly deactive for:\n' + e.map((e) => e.outerHTML + '\n'));
});
const createButton = (e, o, l) => {
		let n = `
    display: block;
    position: relative;
    background-color: #0849b2;
    color: white;
	 z-index: 100;
	 margin-right: 1em;
    padding: 0.5em 1.5em;
    border: 1px solid #000;
    border-radius: 5px;
  `,
			a = document.createElement('button');
		return (
			(a.textContent = e),
			(a.style = n),
			a.classList.add(o),
			a.addEventListener('click', l),
			a.addEventListener('mouseover', (e) =>
				onHandlerStyles(e, 'background-color: #02218a;')
			),
			a.addEventListener('mouseout', (e) =>
				onHandlerStyles(e, 'background-color: #0849b2;')
			),
			a
		);
	},
	onHandlerStyles = ({ target: e }, o) => {
		(e.style.cssText += o), e.removeEventListener('mouseout', onHandlerStyles);
	},
	copyData = ({ orderId: e, client: o, delivery: l, products: n, total: a }) => {
		let i = '';
		(i = $text('.order-status').includes('Нове')
			? `
		Епіцентр
		● ${e}
		● ${n.map(({ article: e, amount: o }) => `${e} ${o}`)} = ${a}`
					.replace(/\s+/g, ' ')
					.trim()
			: `
		Епіцентр
		● ${e}
		● ${o?.lastName} ${o?.firstName} ${o?.patronymic}
		● ${o?.phone}
		● ${l?.provider}
		● ${l?.city}
		● ${l?.warehouse}
		>> ${l?.note}`
					.replace(/\s+/g, ' ')
					.trim()),
			navigator.clipboard.writeText(i);
	},
	t = new Date(1716623937023).getTime(),
	getData = () => {
		try {
			let e = [];
			for (let o of [...$all('.order-products-list > *')]) {
				let l =
					o.querySelector('input[type="number"]')?.value ||
					parseInt(
						o.querySelector('.number-change').textContent.replace(/[^\d]/g, '')
					);
				e.push({
					article: o.querySelector('.item-sku').innerText.split(' ')[1],
					amount: l + 'шт',
					price: o.querySelector('.item-amount').innerText.split(' ')[0],
				});
			}
			let n = {
				orderId: $text('.order-title').split(' ')[1],
				products: e,
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
			return n;
		} catch (a) {
			alert('Ошибка, детали в консоли'), console.error(a);
		}
	},
	r = new Date('2024-06-5').getTime(),
	checkUrl = () => {
		let e = location.href;
		'Нове' === $text('.order-status')
			? ($$('.copy-info').textContent = 'Проверить товар')
			: ($$('.copy-info').textContent = 'Скопировать для 1c'),
			e.includes('orders') && e.split('/').length > 5
				? ($style('.private-buttons-menu').display = 'flex')
				: ($style('.private-buttons-menu').display = 'none');
	},
	copyToBuffer = () => copyData(getData());
if (r > t)
	window.onload = () => {
		let e = `
		display: flex;
		position: absolute;
		left: calc(50% - (177px / 2));
		bottom: 10px;
	`,
			o = document.createElement('div');
		o.classList.add('private-buttons-menu'), (o.style = e);
		let l = createButton('Скопировать для 1c', 'copy-info', copyToBuffer);
		document.body.append(o),
			o.append(l),
			checkUrl(),
			window.addEventListener('mousemove', checkUrl);
	};
else throw Error('update page');
