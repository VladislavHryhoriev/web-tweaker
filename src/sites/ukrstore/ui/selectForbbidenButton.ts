import { forbbidenWords } from '../forbiddenWords';
import createButton from '../utils/create/createButton';
import { list } from '../utils/list';
import waitLoading from '../utils/wait/waitLoading';
import { resetButton } from './resetButton';

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
					title?.includes('женщин') ||
					title?.includes('массаж') ||
					title?.includes('милых дама') ||
					title?.includes('киев') ||
					title?.includes('надоело') ||
					title?.includes('гибкий график') ||
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

		list.updateTotal();
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
