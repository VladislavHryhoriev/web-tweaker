import { copyText } from './utils/copyText';
import { $, $onclick } from './utils/selectors';
import waitDOMElement from './utils/waitDOMElement';

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

// удалить мигающее уведомление
(document.querySelector('#favIcon') as HTMLElement).remove();

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
	const text = (target.textContent as string).trim().slice(5);

	if (target.closest('.edit-input__text')) {
		navigator.clipboard.writeText(text);
	}
};

const mouseHandler = (e: MouseEvent) => {
	waitDOMElement('.detail-box--body', () => {
		const mail = $('[id="flatPlace"');
		mail.addEventListener('click', () => copyText('[id="flatPlace"]'));

		const { names, phones } = checkText('.detail-box--body');

		if (!names) {
			$onclick('#recipientDataCopy', () => copyText('#recipientDataCopy'));
			$('.detail-box--body').style.backgroundColor = '#fdd';
			$('#recipientDataCopy').style.backgroundColor = '#f77';
			$('#recipientDataCopy').style.cursor = 'pointer';
		}

		if (!phones) {
			$onclick('#recipientPhoneCopy', () => copyText('#recipientPhoneCopy'));
			$('#recipientPhoneCopy').style.backgroundColor = '#f77';
			$('.detail-box--body').style.backgroundColor = '#fdd';
		}

		if ($('.level-2')) {
			$('.has--present').style.backgroundColor = '#fa0';
		}
		if ($('.level-3')) {
			$('.has--present').style.backgroundColor = '#A1D8B6';
		}
	});

	copyArticle(e);
};

document.body.addEventListener('click', mouseHandler);
