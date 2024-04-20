import createButton from '../utils/create/createButton';
import { $, $children } from '../utils/selectors';
import { selectForbbidenButton } from './ui/buttons';
import searchId from './utils/searchId';
import waitLoading from './utils/waitLoading';

// Pasha P4O7WtK~orM7

const tabs = {
	_activeTab: 0,

	get current() {
		return this._activeTab;
	},

	set setCurrent(value: string | null | undefined) {
		this._activeTab = Number(value);
	},
};

document.body.addEventListener('click', () => {
	const activeTab = $(`li.tab.active`).firstElementChild;
	tabs.setCurrent = activeTab?.getAttribute('data-tab');

	if (tabs.current === 3) {
		const menu = $('.form-inline');
		menu.append(selectForbbidenButton);

		waitLoading(() => {
			const list = [...$children('.j-list-body')];
			list.map((node) => {
				const currentNode = node.querySelector(
					'.l-table-actions'
				) as HTMLElement;

				const currentNodeId = currentNode?.children[0]
					?.getAttribute('onclick')
					?.match(/\d+/);

				if (currentNodeId) {
					const currentId = currentNodeId[0];

					const newButton = createButton({
						title: currentId,
						className: 'search-id',
						handler: () => searchId(currentId),
						buttonType: 'blue',
					});
					currentNode.prepend(newButton);
				}
			});
		});
	} else {
		if ($('.selectForbbidenButton'))
			$('.form-inline').removeChild(selectForbbidenButton);
	}
});
