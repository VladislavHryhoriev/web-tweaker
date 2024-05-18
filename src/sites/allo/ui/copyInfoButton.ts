import createButton from '../utils/create/createButton';

const copyInfo = () => {};

export const copyInfoButton = createButton({
	title: 'Выбрать запрещенное',
	className: 'copyInfo',
	handler: copyInfo,
});
