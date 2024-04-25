import { forbbidenWords } from '../forbiddenWords';
import createButton from '../utils/create/createButton';
import { getList } from '../utils/getList';
import { $, $all } from '../utils/selectors';
import waitLoading from '../utils/waitLoading';

const checkForbbidenWords = (node: Element) => {
	const titleNode = node.querySelector('.c-link-ajax') as HTMLElement;
	const title = (titleNode.textContent as string).toLowerCase();

	const match = forbbidenWords
		.map((word) => {
			if (title.includes(word.toLowerCase())) {
				return true;
			} else {
				if (
					title?.includes('девуш') ||
					title?.includes('массаж') ||
					title?.includes('дама') ||
					title?.includes('vip')
				) {
					(node.closest('.j-list-row') as HTMLElement).style.backgroundColor =
						'#fa03';
					return false;
				}
			}
		})
		.filter(Boolean)[0];

	if (match) {
		const checkbox = node.querySelector(
			'.check.j-mass-check-item'
		) as HTMLInputElement;
		checkbox.checked = true;

		(node.closest('.j-list-row') as HTMLElement).style.backgroundColor =
			'#f003';

		const total = `${$all('.j-mass-check-item:checked').length} `;
		totalSelected.textContent = total;
	}
};

const selectForbbiden = async () => {
	resetButton.click();

	waitLoading(() => {
		const list = getList();
		list.forEach(checkForbbidenWords);

		if ($all('.j-mass-check-item:checked').length) {
			$('.c-actions-panel').classList.remove('hide');
		}
	});
};

export const totalSelected = $('.j-mass-total');
export const menu = $('.form-inline');
export const resetButton = $('[data-title="Сбросить"]');
export const searchButton = $('input[value="Найти"]');

export const selectForbbidenButton = createButton({
	title: 'Выбрать запрещенное',
	className: 'selectForbbidenButton',
	handler: selectForbbiden,
});

resetButton.addEventListener('click', () => {
	totalSelected.textContent = '0';
});
