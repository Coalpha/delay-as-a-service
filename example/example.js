const buttongroup = document.getElementById("buttongroup");
const timediv = document.getElementById("time");

for (let button of buttongroup.children) {
   const buttonSeconds = button.id[5];
   const unit = buttonSeconds == 1 ? "second" : "seconds";
   button.innerText = `Sleep for ${buttonSeconds} ${unit}`;
   const buttonMS = buttonSeconds * 1000;
   button.addEventListener("click", () => {
      timediv.className = "paused";
      sleep(buttonMS);
      timediv.className = "";
   });
}


function asTime(int) {
   return int.toString().padStart(2, "0");
}

function updateTimediv() {
   const now = new Date;
   const hours = asTime(now.getHours())
   const minutes = asTime(now.getMinutes());
   const seconds = asTime(now.getSeconds());

   timediv.innerText = `${hours}:${minutes}:${seconds}`;
}

updateTimediv();

setInterval(updateTimediv, 1000);
