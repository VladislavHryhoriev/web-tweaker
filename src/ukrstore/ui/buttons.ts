import createButton from '../../utils/create/createButton';
import { $ } from '../../utils/selectors';
import { getList } from '../utils/getList';
import waitLoading from '../utils/waitLoading';

const forbbidenWords = [
	'Приглашаем на работу в салон Vip-уровня массажисток',
	'Открыт набор в Элитное эскорт-сопровождении агентство Киева',
	'Высокооплачиваемая работа для девушек в сфере досуга',
	'Высокооплачиваемая работа',
	'cas',
	'интим',
	'эскорт',
	'сигареты',
	'секс',
	'iqos',
];
// j-mass-actions-bl c-actions-panel alert alert-warning
// j-mass-actions-bl c-actions-panel alert alert-warning hide

const selectForbbiden = async () => {
	resetButton.click();

	waitLoading(() => {
		const list = getList();

		$('.c-actions-panel').classList.toggle('hide');

		list.map((node) => {
			const titleNode = node.querySelector('.c-link-ajax') as HTMLElement;
			const title = titleNode.textContent?.toLowerCase();
			const checkWords = forbbidenWords.some((word) =>
				title?.includes(word.toLowerCase())
			);

			if (checkWords) {
				const checkbox = node.querySelector(
					'.check.j-mass-check-item'
				) as HTMLInputElement;
				checkbox.checked = true;
			}
		});
	});
};

export const resetButton = $('[data-title="Сбросить"]');
export const searchButton = $('input[value="Найти"]');

export const selectForbbidenButton = createButton({
	title: 'Выбрать запрещенное',
	className: 'selectForbbidenButton',
	handler: selectForbbiden,
	buttonType: 'blue',
});
