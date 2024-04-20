import { $ } from '../../../utils/selectors';

export default function waitLoading(callback: Function) {
	const loading = $('#j-general-progress') as HTMLElement;
	loading.click();

	const intervalId = setInterval(() => {
		if (loading.style.display === 'none') {
			clearInterval(intervalId);
			callback();
		}
	}, 100);
}
