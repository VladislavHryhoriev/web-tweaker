import { $ } from '../../utils/selectors';
import { searchButton } from '../ui/buttons';

export default function searchTitle(text: string) {
	const inputTitle = $('.form-group input[name="title"]');
	(inputTitle as HTMLInputElement).value = text;
	searchButton.click();
}
