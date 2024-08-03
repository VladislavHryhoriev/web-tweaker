// вкладка: на подтверждении
export const copyArticle = (e: MouseEvent) => {
	const target = e.target as HTMLElement;

	if (
		location.href.includes('need-confirm') &&
		target.closest('.edit-input__text')
	) {
		const text = (target.textContent as string).trim().slice(5);
		navigator.clipboard.writeText(text);
	}
};
