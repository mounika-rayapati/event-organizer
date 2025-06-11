const form = document.getElementById("eventForm");
const eventsDiv = document.getElementById("events");

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const location = document.getElementById("location").value;
  const description = document.getElementById("description").value;

  const eventEl = document.createElement("div");
  eventEl.className = "event";
  eventEl.innerHTML = `
    <h3>${name}</h3>
    <p>${date} @ ${location}</p>
    <p>${description}</p>
    <button onclick="this.parentElement.remove()">Delete</button>
  `;

  eventsDiv.appendChild(eventEl);
  form.reset();
});
