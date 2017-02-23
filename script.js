
$(document).ready(function(){
let sessiontime = document.querySelector('.num');
let breaktime = document.querySelector('.numBreak');
let counting = false;
let indexCount;
let breakCount;
let numSession;
let numBreak;
$('.button').on("click", function(){
	 numSession = parseInt(sessiontime.innerHTML);
	 numBreak = parseInt(breaktime.innerHTML);
	let s = sessiontime.innerHTML.split(":");
	let b = breaktime.innerHTML.split(":");
	let key = $(this).attr('class');
	let length = key.length;
	key = key.substr(7,length);	
	switch(key){
		case "add5":
		if(!counting){
		numSession += 5;
		$('.num').html(numSession + ":" + s[1]);
		}
		break;
		case "add5Break":
		if(!counting){
		numBreak += 5;
		$('.numBreak').html(numBreak + ":" + b[1]);
		}
		break;
		case "minus5Break":
		if(!counting){
		numBreak >=5 ? numBreak -= 5 : numBreak;
		$('.numBreak').html(numBreak + ":" + b[1]);
		}
		break;
		case "minus5":
		if(!counting){
		numSession >= 5	? numSession -= 5 : numSession;
		$('.num').html(numSession + ":" + s[1]);
		}
		break;
		case "start":
		if(!counting){
		numSession = parseInt(s[0]) + (parseInt(s[1])/60);
		numBreak = parseInt(b[0]) + (parseInt(b[1])/60);
		counting = true;
		startTimer();
		}
		break;
		case "stop":
		$('.circle').css('animation', '');
		$('.circle1').css('animation', '');
		$('.circle2').css('animation', '');
		clearInterval(indexCount);
		clearInterval(breakCount);
		counting = false;
		break;
		case "reset":
		$('.circle').css('animation', '');
		$('.circle1').css('animation', '');
		$('.circle2').css('animation', '');
		counting = false;
		numSession = "25:00";
		numBreak = "05:00";
		sessiontimeSec = 60*25;
		breaktimeSec = 60*5;
		clearInterval(indexCount);
		clearInterval(breakCount);
		$('.num').html(numSession);
		$('.numBreak').html(numBreak);
		break;
	}
function startTimer(){
let sessiontimeSec = numSession*60;	
let breaktimeSec = numBreak*60;
$('.circle').css('animation', 'bounce 1s linear infinite');
$('.circle1').css('animation', 'bounce 1s linear 0.33s infinite');
$('.circle2').css('animation', 'bounce 1s linear 0.66s infinite');

if (counting) {
	indexCount = setInterval(() => {
	sessiontimeSec > 0 ? sessiontimeSec -= 1 : sessiontimeSec;
	let mins = () => Math.floor(sessiontimeSec/60) >= 10 ? Math.floor(sessiontimeSec/60) : "0" + Math.floor(sessiontimeSec/60);
	let secs = () => Math.floor(sessiontimeSec%60) >= 10 ? Math.floor(sessiontimeSec%60) : "0" + Math.floor(sessiontimeSec%60);
	$('.num').html(mins() + ":" + secs());
	if(sessiontimeSec === 0){
		clearInterval(indexCount);
		breakTimer();
	}
}, 1000);
function breakTimer(){
		breakCount = setInterval(() => {
		breaktimeSec > 0 ? breaktimeSec -= 1 : breaktimeSec;
		let minsBreak = () => Math.floor(breaktimeSec/60) >= 10 ? Math.floor(breaktimeSec/60) : "0" + Math.floor(breaktimeSec/60);
		let secsBreak = () => Math.floor(breaktimeSec%60) >= 10 ? Math.floor(breaktimeSec%60) : "0" + Math.floor(breaktimeSec%60);
		$('.numBreak').html(minsBreak() + ":" + secsBreak());
		breaktimeSec === 0 ? clearInterval(breakCount) : breaktimeSec;	
}, 1000);
}
}
}
});
});
