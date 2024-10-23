export const playSound = () => {
	const audio = new Audio();
	audio.src = 'https://www.soundjay.com/buttons/button-44.mp3';
	audio.volume = 0.5;
	audio.play();
};
