import { copyArticle } from './copyArticle';
import { checkOrderInfo } from './utils/checkOrderInfo';
import { setupButtons, setupHotkeys } from './utils/setupButtons';
import waitDOM from './utils/wait/waitDOM';

// td {
// 	font-size: 1.15em !important;
// }

// [data-text-mobile="Артикул"]:hover {
// 	color: coral
// }

// [id="flatPlace"]:hover {
// 	color: #00f;
// 	cursor: pointer;
// }

// удалить мигающее уведомление вкладки
(document.querySelector('#favIcon') as HTMLElement)?.remove();

document.body.addEventListener('click', checkOrderInfo);
document.body.addEventListener('click', copyArticle);

// сменить статусы с "нового" на *обрабатывается*
waitDOM(() => {
	if (location.href.includes('orders')) {
		setupButtons();
		setupHotkeys();
	}
});
