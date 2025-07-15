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

const createCalendar = (elem, year, month) => {
  let mon = month - 1;
  let d = new Date(year, mon);

  let table =
    "<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>";

  for (let i = 0; i < getDay(d); i++) {
    table += "<td></td>";
  }

  const today = new Date();
  while (d.getMonth() == mon) {
    let isToday =
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear();
    if (isToday) {
      table += `<td class="today">${d.getDate()}</td>`;
    } else {
      table += `<td>${d.getDate()}</td>`;
    }

    if (getDay(d) % 7 == 6) {
      table += "</tr><tr>";
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += "<td></td>";
    }
  }

  table += "</tr></table>";

  elem.innerHTML = table;
};

const getDay = (date) => {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
};

const calendarElem = document.getElementById("calendar");
if (calendarElem) {
  now = new Date();
  createCalendar(calendarElem, now.getFullYear(), now.getMonth() + 1);
} else {
  console.error("Calendar element not found");
}
