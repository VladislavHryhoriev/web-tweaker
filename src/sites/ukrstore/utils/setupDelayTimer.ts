import { switchColor } from './switchColor';

export const setupDelayTimer = (min: number) => {
	let inactivityTime = 0;
	const maxInactivityTime = min * 60 * 1000;

	setInterval(() => {
		inactivityTime += 5000;

		// console.log(inactivityTime * 0.001);

		if (inactivityTime >= maxInactivityTime) switchColor.run();
	}, 5000);
};
