type CreateButton = {
	title: string;
	className: string;
	buttonType: 'blue' | 'green';
	handler: (this: HTMLButtonElement, event: MouseEvent) => any;
};

function mouseHandler(e: MouseEvent, styles: string) {
	(e.target as HTMLElement).style.cssText += styles;
}

const buttons = {
	blue: `
		display: inline-block;
		position: relative;
		background-color: #0849b2;
		color: white;
		z-index: 100;
		padding: 0.25em 1em;
		margin-right: 0.5em;
		border: none;
		border-radius: 3px;
		cursor: pointer;`,
	green: `
		display: inline-block;
		position: relative;
		background-color: #5ea327;
		color: white;
		z-index: 100;
		padding: 0.25em 1em;
		margin-right: 0.5em;
		border: none;
		border-radius: 3px;
		cursor: pointer;`,
};

export default function createButton({
	title,
	className,
	buttonType,
	handler,
}: CreateButton) {
	const button = document.createElement('button');

	button.textContent = title;
	button.style.cssText = buttons[buttonType];
	button.classList.add(className);
	button.addEventListener('click', handler);

	// поменять для других цветов buttonType
	button.addEventListener('mouseover', (e) =>
		mouseHandler(e, `background-color: #02218a;`)
	);
	button.addEventListener('mouseout', (e) =>
		mouseHandler(e, `background-color: #0849b2;`)
	);

	return button;
}
