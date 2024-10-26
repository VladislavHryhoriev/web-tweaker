import { copyArticle } from './copyArticle';
import { checkOrderInfo } from './utils/checkOrderInfo';
import { $ } from './utils/selectors';
import { setupButtons, setupHotkeys } from './utils/setup';

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

const observer = new MutationObserver(() => {
	if (location.href.includes('orders') && !$('.setStatusAPI')) {
		setupButtons();
		setupHotkeys();
	}
});

observer.observe(document.body, { childList: true, subtree: true });

// удалить мигающее уведомление вкладки
$('#favIcon')?.remove();

document.body.addEventListener('click', checkOrderInfo);
document.body.addEventListener('click', copyArticle);
