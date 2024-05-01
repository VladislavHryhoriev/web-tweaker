type CreateButton = {
	title: string;
	className: string;
	handler: (this: HTMLAnchorElement, event: MouseEvent) => any;
};

const mouseHandler = (e: MouseEvent, color: string) => {
	const target = e.target as HTMLElement;
	target.removeEventListener('mouseout', mouseHandler as EventListener);
	target.style.backgroundColor = color;
};

export default function createButton({
	title,
	className,
	handler,
}: CreateButton) {
	const style = `
		.${className} {
			display: inline-block !important;
			position: relative;
			background-color: #0849b2 !important;
			color: white !important;
			z-index: 100;
			padding: 0.25em 1em;
			margin-right: 0.5em;
			border: none;
			border-radius: 3px;
			cursor: pointer;
		}
		.${className}:hover {
			background-color: #02218a !important;
		}`;

	const styleElement = document.createElement('style');
	styleElement.textContent = style;
	styleElement.type = 'text/css';

	document.head.appendChild(styleElement);

	const button = document.createElement('a');
	button.textContent = title;
	button.classList.add(className);
	button.addEventListener('click', handler);

	return button;
}
