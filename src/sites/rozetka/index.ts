import { copyText } from './utils/copyText';
import { $, $onclick, $text } from './utils/selectors';
import { nodes, selectors } from './utils/ui/nodes';
import waitDOMElement from './utils/wait/waitDOMElement';

// td {
// 	font-size: 1.15em !important;
// }

// [data-text-mobile="Артикул"]:hover {
// 	color: coral
// }

// [id="flatPlace"]:hover {
// 	color: #00f;
// 	cursor: pointer;
// }

// удалить мигающее уведомление вкладки
(document.querySelector('#favIcon') as HTMLElement).remove();
//

const checkText = (selector: string) => {
	const node = $(selector);

	const nodesName = node.querySelectorAll('.info-group--description');
	const nodesPhone = node.querySelectorAll('.info-group--link');

	const names = [...nodesName].map((node) =>
		(node.textContent as string).trim()
	);
	const phones = [...nodesPhone].map((node) =>
		(node.textContent as string).trim()
	);

	const user = {
		names: names[0] === names[1] ? true : false,
		phones: phones[0] === phones[1] ? true : false,
	};

	return user;
};

// вкладка: на подтверждении
const copyArticle = (e: MouseEvent) => {
	const target = e.target as HTMLElement;

	if (
		location.href.includes('need-confirm') &&
		target.closest('.edit-input__text')
	) {
		const text = (target.textContent as string).trim().slice(5);
		navigator.clipboard.writeText(text);
	}
};
//

const mouseHandler = () => {
	waitDOMElement(selectors.usersBox, () => {
		const {
			address,
			recipientName,
			recipientPhone,
			usersBox,
			paid,
			paymentStatus,
			lvlHigh,
			lvlMedium,
			lvlLow,
		} = selectors;
		const { names, phones } = checkText(usersBox);

		nodes.address.addEventListener('click', () => copyText(address));

		if (!names) {
			$onclick(recipientName, () => copyText(recipientName));
			$(usersBox).style.backgroundColor = '#fdd';
			$(recipientName).style.backgroundColor = '#f77';
			$(recipientName).style.cursor = 'pointer';
		}

		if (!phones) {
			$onclick(recipientPhone, () => copyText(recipientPhone));
			$(recipientPhone).style.backgroundColor = '#f77';
			$(usersBox).style.backgroundColor = '#fdd';
		}

		if ($(lvlHigh)) nodes.rating.style.backgroundColor = '#A1D8B6';
		if ($(lvlMedium)) nodes.rating.style.backgroundColor = '#fa0';
		if ($(lvlLow)) nodes.rating.style.backgroundColor = '#f00';

		if ($text(paid) === 'Оплачено') {
			$(paymentStatus).style.backgroundColor = '#A1D8B6';
		}
	});
};

document.body.addEventListener('click', mouseHandler);
document.body.addEventListener('click', copyArticle);
