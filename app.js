const player = document.getElementById('player');
const coin = document.getElementById('coin');

function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

window.addEventListener('keydown', (e)=>{
	console.log(player.style.top)
	console.log(player.style.left)
	const x = grab_position_from_css(player.style.top)
	const y = grab_position_from_css(player.style.left);
	if(e.key === 'ArrowDown' || e.key === 'Down'){
		player.style.top = `${x+50}px`
	}
	if(e.key === 'ArrowUp' || e.key === 'Up'){
		player.style.top = `${x-50}px`
	}
	if(e.key === 'ArrowLeft' || e.key === 'Left'){
		player.style.transform = 'scale(-1,1)'
		player.style.left = `${y-50}px`
	}
	if(e.key === 'ArrowRight' || e.key === 'Right'){
		player.style.transform = 'scale(1,1)'
		player.style.left = `${y+50}px`
	}

	if(isTouching(player, coin)){
		move_coin_randomly();
	}
})

const grab_position_from_css = (position)=>{
	console.log(position)
	if(!position){
		return 100;
	}
	return parseInt(position.slice(0,-2))
}

const move_coin_randomly = ()=>{
	console.log(window.innerWidth)
	coin.style.top = `${Math.floor(Math.random()* window.innerHeight)}px`;
	coin.style.left = `${Math.floor(Math.random()* window.innerWidth)}px`;
}

move_coin_randomly();