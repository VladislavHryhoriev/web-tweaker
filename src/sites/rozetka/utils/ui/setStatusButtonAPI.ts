import createButton from '../create/createButton';

export interface Order {
	id: number;
	status: number;
}

const getTokenRozetka = async () => {
	if (localStorage.getItem('token')) {
		console.log('get token from local storage');
		return localStorage.getItem('token');
	}

	const username = 'shopelektreka';
	const password = 'CTCGJ7Kh9c2kXa8E';

	const requestBody = {
		username: username,
		password: btoa(password),
	};

	const response = await fetch('https://api-seller.rozetka.com.ua/api/sites', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(requestBody),
	});

	const json = await response.json();
	const token = json.content.access_token;
	console.log(json, token);

	localStorage.setItem('token', token);

	return token;
};

const getNewOrders = async (): Promise<Order[]> => {
	const token = await getTokenRozetka();

	const response = await fetch(
		'https://api-seller.rozetka.com.ua/api/orders/search?status=1',
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	const json = await response.json();
	console.log(json.content.orders);

	return json.content.orders;
};

const setStatusAPI = async () => {
	const token = await getTokenRozetka();
	const orders = await getNewOrders();
	const requestBody = { status: 26 };

	orders.forEach(async (order) => {
		try {
			await fetch(`https://api-seller.rozetka.com.ua/api/orders/${order.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(requestBody),
			});
		} catch (error) {
			console.log(error);
		}
	});
};

export const setStatusButtonAPI = createButton({
	title: 'Обработать с API',
	className: 'setStatusAPI',
	handler: setStatusAPI,
});
