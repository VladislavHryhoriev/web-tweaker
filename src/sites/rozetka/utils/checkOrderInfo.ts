import { checkText } from './checkText';
import { copyText } from './copyText';
import { $, $onclick, $text } from './selectors';
import { nodes, selectors } from './ui/nodes';
import waitDOMElement from './wait/waitDOMElement';

export const checkOrderInfo = () => {
	waitDOMElement(selectors.usersBox, () => {
		const { names, phones } = checkText(selectors.usersBox);

		nodes.address.addEventListener('click', () => copyText(selectors.address));

		if (!names) {
			$onclick(selectors.recipientName, () => copyText(selectors.recipientName));
			$(selectors.usersBox).style.backgroundColor = '#fdd';
			$(selectors.recipientName).style.backgroundColor = '#f77';
			$(selectors.recipientName).style.cursor = 'pointer';
		}

		if (!phones) {
			$onclick(selectors.recipientPhone, () => copyText(selectors.recipientPhone));
			$(selectors.recipientPhone).style.backgroundColor = '#f77';
			$(selectors.usersBox).style.backgroundColor = '#fdd';
		}

		if ($(selectors.lvlHigh)) nodes.rating.style.backgroundColor = '#A1D8B6';
		if ($(selectors.lvlMedium)) nodes.rating.style.backgroundColor = '#fa0';
		if ($(selectors.lvlLow)) nodes.rating.style.backgroundColor = '#f00';

		if ($text(selectors.paid) === 'Оплачено') {
			$(selectors.paymentStatus).style.backgroundColor = '#A1D8B6';
		}
	});
};
