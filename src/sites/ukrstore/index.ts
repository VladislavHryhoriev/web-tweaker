// Pasha P4O7WtK~orM7
import createButton from '../../utils/create/createButton';
import { $, $children } from '../../utils/selectors';
import waitDOM from '../../utils/wait/waitDOM';
import { menu, selectForbbidenButton } from './ui/nodes';
import searchId from './utils/searchId';
import waitLoading from './utils/waitLoading';

// .text-error.j-mass-action, [data-id="approve"] {
// 	padding: 0.5em !important;
// 	background: #0001;
// 	border-radius: 5px
// }

const addButton = (node: Element) => {
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

	// if (tabNumber === '3') {
	if (tabNumber) {
		menu.append(selectForbbidenButton);

		waitLoading(() => {
			const list = [...$children('.j-list-body')];
			list.forEach(addButton);
		});
	} else {
		createdButton && $('.form-inline')?.removeChild(selectForbbidenButton);
	}
};

waitDOM(handleClick);
document.body.addEventListener('click', handleClick);
