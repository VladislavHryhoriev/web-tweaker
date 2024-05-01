// Pasha P4O7WtK~orM7
import { approveButton } from './ui/approveButton';
import { blockButton } from './ui/blockButton';
import { proccessButton } from './ui/proccessButton';
import { resetButton } from './ui/resetButton';
import { selectForbbidenButton } from './ui/selectForbbidenButton';
import createButton from './utils/create/createButton';
import { list } from './utils/list';
import searchId from './utils/search/searchId';
import { $ } from './utils/selectors';
import { setupButtons } from './utils/setupButtons';
import waitDOM from './utils/wait/waitDOM';
import waitLoading from './utils/wait/waitLoading';

// .c-actions-panel-items a {
// 	padding: 0.5em !important;
// 	margin-right: 10px;
// 	background-color: #0001;
// 	border-radius: 5px
// }

// .c-actions-panel-items a:before {
// 	background: none !important;
// }

const filterIdButton = (node: Element) => {
	const currentNode = node.querySelector('.j-mob-table-menu') as HTMLElement;
	const currentId = currentNode?.firstElementChild
		?.getAttribute('onclick')
		?.match(/\d+/)?.[0];

	if (currentId) {
		const newButton = createButton({
			title: currentId,
			className: 'search-id',
			handler: () => searchId(currentId),
		});
		currentNode.prepend(newButton);
	}
};

const handleClick = () => {
	const activeTab = $(`li.tab.active`).firstElementChild;
	const tabNumber = activeTab?.getAttribute('data-tab');
	const createdButton = $('.selectForbbidenButton');

	if (tabNumber === '3') {
		if (!$('.selectForbbidenButton')) setupButtons();
		waitLoading(() => list.all.forEach(filterIdButton));
	} else {
		createdButton && $('.form-inline')?.removeChild(selectForbbidenButton);
	}
};

waitDOM(handleClick);
document.body.addEventListener('click', handleClick);

document.addEventListener('keydown', (e: KeyboardEvent) => {
	if (e.ctrlKey) {
		if (e.code === 'Quote') {
			e.preventDefault();
			selectForbbidenButton.click();
		}
		if (e.code === 'Backslash') {
			e.preventDefault();
			proccessButton.click();
		}
		if (e.code === 'BracketLeft') {
			e.preventDefault();
			approveButton.click();
		}
		if (e.code === 'BracketRight') {
			e.preventDefault();
			blockButton.click();
		}
		if (e.code === 'keyR') {
			e.preventDefault();
			resetButton.click();
		}
	}
});
