function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
  document.getElementById("clock").textContent = timeString;
}

function changeBackground() {
  const now = new Date();
  const hours = now.getHours();
  let selectedBackground;

  if (hours >= 18 || hours < 5) {
    selectedBackground = "night.jpeg";  
  } else {
    selectedBackground = "day.jpeg";
  }

  document.body.style.backgroundImage = `url('${selectedBackground}')`;
}

updateClock();
changeBackground();

setInterval(updateClock, 1000);

setInterval(changeBackground, 60000);
