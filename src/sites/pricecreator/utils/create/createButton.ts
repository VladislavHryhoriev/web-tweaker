interface CreateButton {
	title: string;
	className: string;
	handler: (this: HTMLInputElement, event: MouseEvent) => any;
}

export default function createButton({ title, className, handler }: CreateButton) {
	const style = `
		.${className} {
			display: inline-block;
			position: relative;
			background-color: #0849b2 !important;
			color: white;
			z-index: 100;
			padding: 0.75em 1em;
			margin-right: 0.em;
			margin-left: 0.25em;
			border: none;
			border-radius: 3px;
			cursor: pointer;
		}
		.${className}:hover {
			background-color: #02218a;
		}
		`;

	const styleElement = document.createElement('style');
	styleElement.textContent = style;

	document.head.appendChild(styleElement);

	const button = document.createElement('input');
	button.type = 'button';
	button.value = title;
	button.style.cssText = style;
	button.classList.add(className);
	button.addEventListener('click', handler);

	return button;
}
