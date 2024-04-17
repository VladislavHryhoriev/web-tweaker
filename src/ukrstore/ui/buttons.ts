import createButton from '../../utils/create/createButton';
import { $ } from '../../utils/selectors';
import { getList } from '../utils/getList';
import searchTitle from '../utils/searchTitle';
import waitLoading from '../utils/waitLoading';

const forbbidenWords = [
	'Приглашаем на работу в салон Vip-уровня массажисток',
	'Открыт набор в Элитное эскорт-сопровождении агентство Киева',
	'cas',
];

const tireModerate = () => {
	waitLoading(() => {
		searchTitle('шина');
	});
};

const selectForbbiden = async () => {
	waitLoading(() => {
		resetButton.click();

		waitLoading(() => {
			const list = getList();

			list.map((node) => {
				const titleNode = node.querySelector('.c-link-ajax') as HTMLElement;
				const title = titleNode.textContent?.toLowerCase();

				if (
					forbbidenWords.some((word) => title?.includes(word.toLowerCase()))
				) {
					const checkbox = node.querySelector(
						'.check.j-mass-check-item'
					) as HTMLInputElement;
					checkbox.checked = true;
				}
			});
		});
	});
};

export const resetButton = $('[data-title="Сбросить"]');
export const searchButton = $('input[value="Найти"]');

export const tireModButton = createButton({
	title: 'Модерация шин',
	className: 'tire-moderate',
	handler: tireModerate,
	buttonType: 'blue',
});

export const selectForbbidenButton = createButton({
	title: 'Выбрать запрещенное',
	className: 'tire-moderate',
	handler: selectForbbiden,
	buttonType: 'blue',
});
