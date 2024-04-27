import createButton from '../utils/create/createButton';
import { list } from '../utils/list';
import waitLoading from '../utils/wait/waitLoading';
import { approveButton } from './approveButton';
import { blockButton } from './blockButton';
import { resetButton } from './resetButton';

const waitForUserChoice = () => {
	return new Promise((resolve) => {
		const handler = (e: KeyboardEvent) => {
			const [isApprove, isBlock] = [e.key === '3', e.key === '4'];

			if (isApprove) {
				approveButton.click();
				document.removeEventListener('keydown', handler);
				resolve(true);
			}

			if (isBlock) {
				blockButton.click();
				document.removeEventListener('keydown', handler);
				resolve(true);
			}
		};

		document.addEventListener('keydown', handler);
	});
};

const waitUserKeyInput = (node: HTMLElement) => {
	const checkbox = node.querySelector('.j-mass-check-item') as HTMLInputElement;

	return new Promise((resolve) => {
		node.style.backgroundColor = '#0af5';

		const handler = (e: KeyboardEvent) => {
			const [isActive, isDeactive] = [e.key === '1', e.key === '2'];

			if (isActive || isDeactive) {
				node.style.backgroundColor = isActive ? '#f006' : '#0f06';
				node.style.display = 'none';
				checkbox.checked = isActive;
				document.removeEventListener('keydown', handler);
				resolve(true);
			}
		};

		list.showModMenu();
		list.updateTotal();
		document.addEventListener('keydown', handler);
	});
};

const proccessSelected = () => {
	resetButton.click();

	waitLoading(async () => {
		for (const node of list.all) {
			await waitUserKeyInput(node as HTMLElement);
		}

		list.all.forEach((node: Element) => {
			(node as HTMLElement).style.display = 'table-row';
		});

		// дать выбор одобрить или заблокировать
		await waitForUserChoice();
	});
};

// пробегает по всем элементам в списке с возможностью
// поставить чекбокс потом принять или заблокировать
export const proccessButton = createButton({
	title: 'Выборка вручную (кнопки 1/2/3/4)',
	className: 'proccessButton',
	handler: proccessSelected,
});
