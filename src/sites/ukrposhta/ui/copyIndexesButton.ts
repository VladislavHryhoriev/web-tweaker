import createButton from '../utils/create/createButton';

const copyIndexes = () => {
	const list = document.querySelectorAll(
		'#postofficesListPreview .officePreviewItem'
	);

	let arr = [] as string[];

	list.forEach((node: Element) => {
		const index = node.querySelector('h1')!.textContent;
		const addressNode = node.querySelector('p')!.textContent;
		const address = addressNode?.split(',').slice(0, 2);
		const city = addressNode?.split(',').slice(-1);

		arr.push(`${index} ${city}, ${address}`);

		arr = arr.sort((a, b) => a.localeCompare(b));
	});

	const text = arr.join('\n');

	window.navigator.clipboard.writeText(text);
};

export const copyIndexesButton = createButton({
	title: 'Копировать индексы',
	className: 'proccessButton',
	handler: copyIndexes,
});
