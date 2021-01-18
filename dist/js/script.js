let time = new Date();
let h2 = document.createElement("h2");
h2.textContent = `Время: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
document.querySelector("body").appendChild(h2);

let linkStartTimer = null;

let timer = () => {
	linkStartTimer = setInterval(() => {
		time = new Date();
		h2.innerHTML = `Время: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
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
