export const setupDelayTimer = (min: number, callback: Function) => {
	let inactivityTime = 0;
	const maxInactivityTime = min * 60 * 1000;

	const resetInactivityTime = () => {
		inactivityTime = 0;
	};

	setInterval(() => {
		inactivityTime += 5000;

		console.log(inactivityTime * 0.001);

		if (inactivityTime >= maxInactivityTime) callback();
		if (inactivityTime >= maxInactivityTime + 10000) resetInactivityTime();
	}, 5000);

	window.addEventListener('focus', resetInactivityTime);
	window.addEventListener('mousemove', resetInactivityTime);
	window.addEventListener('keydown', resetInactivityTime);
};
