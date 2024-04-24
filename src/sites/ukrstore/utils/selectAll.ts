import { $click } from './selectors';
import waitLoading from './waitLoading';

export default function selectAll() {
	waitLoading(() => {
		$click('a.j-mass-all');
	});
}
