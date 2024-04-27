import { list } from '../utils/list';
import { $ } from '../utils/selectors';

export const resetButton = $('[data-title="Сбросить"]');

resetButton.addEventListener('click', () => {
	list.length = '0';
});
