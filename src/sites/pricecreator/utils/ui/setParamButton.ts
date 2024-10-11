import createButton from '../create/createButton';

const setParam = () => {};

export const setParamButton = createButton({
	title: 'Установить 2 метра',
	className: 'setParam',
	handler: setParam,
});
