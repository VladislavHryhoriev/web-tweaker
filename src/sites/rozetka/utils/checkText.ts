import { $ } from './selectors';

export const checkText = (selector: string) => {
	const node = $(selector);

	const nodesName = node.querySelectorAll('.info-group--description');
	const nodesPhone = node.querySelectorAll('.info-group--link');

	const names = [...nodesName].map((node) =>
		(node.textContent as string).trim()
	);
	const phones = [...nodesPhone].map((node) =>
		(node.textContent as string).trim()
	);

	const user = {
		names: names[0] === names[1] ? true : false,
		phones: phones[0] === phones[1] ? true : false,
	};

	return user;
};
