export const getElementByText = (text: string) => {
	const xpath = `//*[contains(text(), '${text}')]`;
	const result = document.evaluate(
		xpath,
		document,
		null,
		XPathResult.FIRST_ORDERED_NODE_TYPE,
		null
	);
	return result.singleNodeValue as HTMLElement;
};
