import createButton from '../utils/create/createButton';
import { $, $children, $closest } from '../utils/selectors';
import { selectForbbidenButton, tireModButton } from './ui/buttons';
import searchId from './utils/searchId';
import waitLoading from './utils/waitLoading';

document.body.addEventListener('click', () => {
	const node = $closest('.tab a[data-tab="3"]', '.active');
	const btnNode = $('.tire-moderate');
	// const menu = $('.form-inline');

	if (node) {
		// menu.append(tireModButton, selectForbbidenButton);

		waitLoading(() => {
			const list = [...$children('.j-list-body')];
			list.map((node) => {
				const currentNode = node.querySelector(
					'.l-table-actions'
				) as HTMLElement;

				const currentNodeId = currentNode?.children[0]?.getAttribute('onclick');
				if (currentNodeId) {
					const matchedId = currentNodeId.match(/\d+/);
					if (matchedId) {
						const currentId = matchedId[0];
						const newButton = createButton({
							title: currentId,
							className: 'search-id',
							handler: () => searchId(currentId),
							buttonType: 'blue',
						});
						currentNode.prepend(newButton);
					}
				}
			});
		});
	} else {
		if (btnNode) {
			$('.form-inline').removeChild(tireModButton);
			$('.form-inline').removeChild(selectForbbidenButton);
		}
	}
});
