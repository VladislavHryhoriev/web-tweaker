import { $ } from './utils/selectors';
import { setupButtons } from './utils/setupButtons';
import { selectors } from './utils/ui/nodes';
import waitDOM from './utils/wait/waitDOM';
import waitDOMElement from './utils/wait/waitDOMElement';

let flag = false;

let reloadTimer = null as ReturnType<typeof setTimeout> | null;

function startReloadTimer() {
	// Устанавливаем таймер на 3 минуты
	reloadTimer = setTimeout(() => {
		location.reload(); // Обновление страницы
	}, 2 * 60 * 1000);
}

function stopReloadTimer() {
	// Очищаем таймер, если он установлен
	if (reloadTimer) {
		clearTimeout(reloadTimer);
		reloadTimer = null;
	}
}

// Слушаем событие потери фокуса окна
document.addEventListener('visibilitychange', () => {
	if (document.hidden) {
		// Если пользователь покинул страницу
		startReloadTimer();
	} else {
		// Если пользователь вернулся
		stopReloadTimer();
	}
});

// Сбрасываем таймер при загрузке страницы
stopReloadTimer();

/// -----------------

const switchColor = () => {
	flag = !flag;

	const red = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='${
		flag ? 'red' : 'blue'
	}' /%3E%3C/svg%3E`;

	return flag ? red : red;
};

const start = () => {
	waitDOM(() => {
		if (location.href.includes('u/0')) {
			setInterval(() => {
				const iconElement = $('[rel="icon"]') as HTMLLinkElement;
				if (!iconElement.href.includes('0.png')) {
					iconElement.setAttribute('href', switchColor());
				}
			}, 5000);
		}
	});

	setupButtons();
};

waitDOMElement(selectors.menu, start);
