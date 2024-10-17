import { forbbidenWords } from '../forbiddenWords';
import createButton from '../utils/create/createButton';
import { list } from '../utils/list';
import waitLoading from '../utils/wait/waitLoading';
import { resetButton } from './resetButton';

function compareStrings(str1: string, str2: string) {
	return str1.localeCompare(str2, undefined, { sensitivity: 'base' }) === 0;
}

const checkForbbidenWords = (node: Element) => {
	const titleNode = node.querySelector('.c-link-ajax') as HTMLElement;
	const title = (titleNode.textContent as string).toLowerCase();

	const forbidden = forbbidenWords.some((word) => {
		return (
			compareStrings(word.toLowerCase(), title) || title.includes(word.toLowerCase())
		);
	});

	const additionalForbidden = [
		'девуш',
		'женщин',
		'массаж',
		'милых дам',
		'надоело',
		'гибкий график',
		'лучшие условия',
		'хороший доход',
		'c a s',
		'привет ищу парня',
		'vip',
		'oxycodon',
		'meth',
		'mephed',
		'heroin',
		'lsd',
		'mdma',
		'ketamin',
		'xanax',
		'ephedrin',
		'fent',
		'etizolam',
		'tramadol',
		'clonazepam',
		'bromadol',
		'oxycodone',
	].some((phrase) => title.includes(phrase));

	if (forbidden) {
		const checkbox = node.querySelector(
			'.check.j-mass-check-item'
		) as HTMLInputElement;
		checkbox.checked = true;
		(node.closest('.j-list-row') as HTMLElement).style.backgroundColor = '#f003';
		list.updateTotal();
	} else if (additionalForbidden) {
		(node.closest('.j-list-row') as HTMLElement).style.backgroundColor = '#fa03';
	}
};

const selectForbbiden = async () => {
	resetButton.click();

	waitLoading(() => {
		list.all.forEach(checkForbbidenWords);

		if (list.totalSelected) {
			list.showModMenu();
		}
	});
};

export const selectForbbidenButton = createButton({
	title: 'Выбрать запрещенное',
	className: 'selectForbbidenButton',
	handler: selectForbbiden,
});
