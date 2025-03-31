// Найти элемент по селектору
export const $ = <T extends HTMLElement>(selector: string) => {
	return document.querySelector(selector) as T;
};

// Найти все элементы по селектору
export const $all = <T extends HTMLElement>(selector: string) => {
	return document.querySelectorAll<T>(selector) as NodeListOf<T>;
};

// Найти элемент по селектору и вернуть его текст
export const $text = <T extends HTMLElement>(selector: string) => {
	return ($(selector) as T)?.innerText.trim();
};

// Найти элемент по селектору и вернуть его значение
export const $value = <T extends HTMLInputElement>(selector: string) => {
	return ($(selector) as T)?.value;
};

// Найти элемент по селектору и вернуть его стили
export const $style = <T extends HTMLElement>(selector: string) => {
	return ($(selector) as T).style;
};

// Найти элемент по селектору и вызвать клик по нему
export const $click = <T extends HTMLElement>(selector: string) => {
	($(selector) as T).click();
};

// Найти элемент по селектору и найти ближайшего родителя
export const $closest = <T extends HTMLElement>(
	selector: string,
	parent: string
) => {
	return ($(selector) as HTMLElement).closest(parent) as T;
};

// Найти все дочерние элементы
export const $children = <T extends HTMLInputElement>(selector: string) => {
	return ($(selector) as T).children;
};
