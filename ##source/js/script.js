let time = new Date();
let h2 = document.createElement("h2");
h2.textContent = `Время: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
document.querySelector("body").appendChild(h2);

let linkStartTimer = null;

// let fixTime = (time) => {
// 	if (time.getMinutes() < 10 && time.getSeconds() < 10)
// 		return "0" + time.getMinutes() + ":" + "0" + time.getSeconds();
// 	else if (time.getMinutes() >= 10 && time.getSeconds() < 10)
// 		return time.getMinutes() + ":" + "0" + time.getSeconds();
// 	else if (time.getMinutes() <= 10 && time.getSeconds() >= 10)
// 		return "0" + time.getMinutes() + ":" + time.getSeconds();
// 	else return time.getMinutes() + ":" + time.getSeconds();
// };

let timer = () => {
	linkStartTimer = setInterval(() => {
		time = new Date();
		h2.innerHTML = `Время: ${
			time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
		}:${
			time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
		}:${
			time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()
		}`;
	}, 1000);
};

const startTimer = document.createElement("button");
startTimer.textContent = "Start";
document.querySelector("body").appendChild(startTimer);

startTimer.addEventListener("click", (event) => {
	timer();
});

const stopTimer = document.createElement("button");
stopTimer.textContent = "Stop";
document.querySelector("body").appendChild(stopTimer);

stopTimer.addEventListener("click", (event) => {
	clearInterval(linkStartTimer);
});

window.onload = timer();
