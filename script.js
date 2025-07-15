const showTime = () => {
  const now = new Date();
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let secondes = String(now.getSeconds()).padStart(2, "0");

  const currentTime = `Hour : ${hours}:${minutes}:${secondes}`;

  document.getElementById("time").textContent = currentTime;
};
showTime();
setInterval(showTime, 1000);
