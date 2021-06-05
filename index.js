
const toPlay = (e) => {
	
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
	setTimeout(() => {key.classList.remove('playing');} , 0.07)
};

function removeTransition(e) {
	console.log(this)
	console.log(e.target)
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing')	
}

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', toPlay);