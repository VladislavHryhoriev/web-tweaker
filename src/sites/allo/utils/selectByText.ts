const selectByText = (text: string, selector: keyof HTMLElementTagNameMap) => {
	const nodes = [...document.querySelectorAll<HTMLElement>(selector)];
	return nodes.find((node) => node.innerText === text)!;
};

export default selectByText;
