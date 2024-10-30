import createButton from '../create/createButton';
import { $ } from '../selectors';

const setStatusAPI = async () => {
	try {
		const button = $('.setStatusAPI') as HTMLInputElement;
		const temp = button.value;
		button.disabled = true;

		const response = await fetch(
			`https://rozetka-api.vercel.app/api/update-status?token=token3301`
		);

		const { message } = await response.json();
		console.log(message);
		button.value = `В обработке: ${message.length}шт`;

		setTimeout(() => {
			button.value = temp;
			button.disabled = false;
		}, 2000);
	} catch (error) {
		console.log(error);
	}
};

export const setStatusButtonAPI = createButton({
	title: 'Обработать с API',
	className: 'setStatusAPI',
	handler: setStatusAPI,
});
