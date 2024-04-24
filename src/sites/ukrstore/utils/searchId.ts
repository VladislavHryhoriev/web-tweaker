import { $ } from './selectors';
import { searchButton } from '../ui/nodes';
import selectAll from './selectAll';
import waitLoading from './waitLoading';

export default function searchId(text: string) {
	const inputId = $('.form-group input[name="uid"]');
	(inputId as HTMLInputElement).value = text;
	searchButton.click();

	waitLoading(selectAll);
}
