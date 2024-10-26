import createButton from '../create/createButton';
import { $ } from '../selectors';

const setStatusAPI = async () => {
	try {
		const button = $('.setStatusAPI') as HTMLButtonElement;
		button.disabled = true;

		const response = await fetch(
			`https://rozetka-api.vercel.app/api/update-status?token=token3301`
		);

		const json = await response.json();
		console.log(json);

		button.disabled = false;
	} catch (error) {
		console.log(error);
	}
};

export const setStatusButtonAPI = createButton({
	title: 'Обработать с API',
	className: 'setStatusAPI',
	handler: setStatusAPI,
});
