import createButton from '../../../utils/create/createButton';
import { $ } from '../../../utils/selectors';
import { forbbidenWords } from '../forbiddenWords';
import { getList } from '../utils/getList';
import waitLoading from '../utils/waitLoading';

const checkForbbidenWords = (node: Element) => {
	const titleNode = node.querySelector('.c-link-ajax') as HTMLElement;
	const title = titleNode.textContent?.toLowerCase();
	const words = forbbidenWords.some((word) =>
		title?.includes(word.toLowerCase())
	);

	if (words) {
		const checkbox = node.querySelector(
			'.check.j-mass-check-item'
		) as HTMLInputElement;
		checkbox.checked = true;
	}
};

const selectForbbiden = async () => {
	resetButton.click();

	waitLoading(() => {
		const list = getList();
		$('.c-actions-panel').classList.toggle('hide');
		list.forEach(checkForbbidenWords);
	});
};

export const menu = $('.form-inline');
export const resetButton = $('[data-title="Сбросить"]');
export const searchButton = $('input[value="Найти"]');

export const selectForbbidenButton = createButton({
	title: 'Выбрать запрещенное',
	className: 'selectForbbidenButton',
	handler: selectForbbiden,
});
