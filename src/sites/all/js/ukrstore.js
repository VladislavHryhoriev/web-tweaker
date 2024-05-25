const $all = (selector) => document.querySelectorAll(selector);
const $$ = (selector) => document.querySelector(selector);
const $text = (selector) => document.querySelector(selector)?.innerText;
const $value = (selector) => document.querySelector(selector).value;
const $style = (selector) => document.querySelector(selector).style;

function waitForNode(selector, callback) {
	const intervalId = setInterval(() => {
		const node = $$(selector);
		if (node) {
			clearInterval(intervalId);
			callback(node);
		}
	}, 100);
}

function waitForUpdateURL(param, callback) {
	const url = location.href;

	const intervalId = setInterval(() => {
		if (url !== location.href || url.includes(param)) {
			clearInterval(intervalId);
			callback();
		}
	}, 200);
}

function waitLoading(callback) {
	const loading = $$('#j-general-progress');
	loading.click();

	const intervalId = setInterval(() => {
		if (loading.style.display === 'none') {
			clearInterval(intervalId);
			callback();
		}
	}, 100);
}

function createButton(text, className, handler) {
	const initialStyles = `
    display: inline-block;
    position: relative;
    background-color: #0849b2;
    color: white;
	 	z-index: 100;
    padding: 0.25em 1.5em;
    border: 1px solid #000;
    border-radius: 3px;
  `;

	const button = document.createElement('button');
	button.textContent = text;
	button.style = initialStyles;
	button.classList.add(className);
	button.addEventListener('click', handler);
	button.addEventListener('mouseover', (e) =>
		onHandlerStyles(e, `background-color: #02218a;`)
	);
	button.addEventListener('mouseout', (e) =>
		onHandlerStyles(e, `background-color: #0849b2;`)
	);

	return button;
}

function onHandlerStyles({ target }, styles) {
	target.style.cssText += styles;
	target.removeEventListener('mouseout', onHandlerStyles);
}

function searchTitle(text) {
	const inputTitle = $$('.form-group input[name="title"]');
	inputTitle.value = text;
	$$('input[value="Найти"]').click();
}

function searchId(text) {
	const inputId = $$('.form-group input[name="uid"]');
	inputId.value = text;
	$$('input[value="Найти"]').click();

	waitLoading(() => {
		$$('a.j-mass-all').click();
	});
}

function tireModerate() {
	waitLoading(() => {
		searchTitle('плитка');
	});
}

window.onload = () => {
	const btn = createButton('Модерация шин', 'tire-moderate', tireModerate);

	document.body.addEventListener('click', () => {
		const node = $$('.tab a[data-tab="3"]').closest('.active');
		const btnNode = $$('.tire-moderate');

		if (node) {
			$$('.form-inline').append(btn);

			waitLoading(() => {
				const list = [...$$('.j-list-body').children];
				list.map((node) => {
					const currentNode = node.children[7];
					const currentNodeId = currentNode.children[0]
						.getAttribute('onclick')
						.match(/\d+/)[0];
					const newButton = createButton(currentNodeId, 'search-id', () => {
						searchId(currentNodeId);
					});
					currentNode.prepend(newButton);
				});
			});
		} else {
			if (btnNode) $$('.form-inline').removeChild(btn);
		}
	});
};
