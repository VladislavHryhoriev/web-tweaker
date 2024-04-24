import { $ } from './selectors';
import { searchButton } from '../ui/nodes';

export default function searchTitle(text: string) {
	const inputTitle = $('.form-group input[name="title"]');
	(inputTitle as HTMLInputElement).value = text;
	searchButton.click();
}
