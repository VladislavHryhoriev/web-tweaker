// import { $ } from '../../utils/selectors';
// import waitDOMElement from '../../utils/wait/waitForNode';

// // удалить мигающее уведомление
// (document.querySelector('#favIcon') as HTMLLinkElement).remove();

// //?
// const findText = (node: HTMLElement) => {
// 	const userInfoNode = $(node);

// 	const nodesName = userInfoNode.querySelectorAll('.info-group--description');
// 	const nodesPhone = userInfoNode.querySelectorAll('.info-group--link');

// 	const names = [...nodesName].map((node) =>
// 		(node.textContent as string).trim()
// 	);
// 	const phones = [...nodesPhone].map((node) =>
// 		(node.textContent as string).trim()
// 	);

// 	const user = {
// 		names: names[0] === names[1] ? true : false,
// 		phones: phones[0] === phones[1] ? true : false,
// 	};

// 	return user;
// };

// document.body.addEventListener('click', ({ target }) => {
// 	const text = target.textContent.trim().slice(5);

// 	if (target.closest('.edit-input__text')) {
// 		navigator.clipboard.writeText(text);
// 		console.log(text);
// 	}

// 	waitDOMElement('.detail-box--body', () => {
// 		const { names, phones } = findText('.detail-box--body');
// 		if (names && phones) {
// 			// $$('.detail-box--body').style.backgroundColor = '#ddffdd';
// 		} else {
// 			$('.detail-box--body').style.backgroundColor = '#ffdddd';
// 		}
// 	});
// });
