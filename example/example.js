import sleep_ms from "../lib/client.js";

const buttongroup = document.getElementById("buttongroup");
const timediv = document.getElementById("time");

/**
 * @param {Number} seconds
 */
function sleep_s(seconds) {
   sleep_ms(seconds * 1000);
}

for (const button of buttongroup.children) {
   const buttonSeconds = +button.getAttribute("data-sleep");

   const unit = buttonSeconds === 1 ? "second" : "seconds";

   button.innerText = `Sleep for ${buttonSeconds} ${unit}`;
   button.addEventListener("click", () => {
      timediv.setAttribute("class", "clock-paused");
      sleep_s(buttonSeconds);
      timediv.removeAttribute("class");
   });
}

/**
 * @param {Number} int
 * @returns {String}
 */
function asTime(int) {
   return int.toString().padStart(2, "0");
}

function updateTime() {
   const now = new Date;
   const hours = asTime(now.getHours());
   const minutes = asTime(now.getMinutes());
   const seconds = asTime(now.getSeconds());

   timediv.innerText = `${hours}:${minutes}:${seconds}`;
}

updateTime();

setInterval(updateTime, 1000);
