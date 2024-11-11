import { copyIndexesButton } from '../ui/copyIndexesButton';
import { $ } from './selectors';
import waitDOMElement from './wait/waitDOMElement';

const findTTN = (e: KeyboardEvent) => {
	e.preventDefault();
	const input = $('#trackcode') as HTMLInputElement;

	input.focus();
	input.select();

	navigator.clipboard
		.readText()
		.then((text) => (input.value = text))
		.catch((err) => console.error('Не удалось вставить текст из буфера:', err));
};

export const setupButtons = () => {
	waitDOMElement('.row.whiteBase', () => {
		const menu = $('.row.whiteBase');

		const buttons = [copyIndexesButton];
		menu.append(...buttons);
	});
};

export const setupHotkeys = () => {
	window.addEventListener('keydown', (e: KeyboardEvent) => {
		if (e.code === 'Slash') findTTN(e);
	});
};
