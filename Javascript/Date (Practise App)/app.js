function displayOutput(message, isError = false) {
  const output = document.getElementById("output");
  output.innerText = message;
  output.className = isError ? "output error" : "output";
}

function addDays() {
  const dateInput = document.getElementById("date-input").value;
  const addDaysInput = document.getElementById("add-days").value;

  const date = new Date(dateInput);

  date.setDate(date.getDate() + parseInt(addDaysInput));

  displayOutput("The new date is: " + date.toDateString());
}

function formatDate() {
  const dateInput = document.getElementById("date-input").value;
  const formatOption = document.getElementById("format-options").value;

  const date = new Date(dateInput);

  switch (formatOption) {
    case "toLocaleDateString":
      displayOutput("Formatted date: " + date.toLocaleDateString());
      break;

    case "toLocaleTimeString":
      displayOutput("Formatted date: " + date.toLocaleTimeString());
      break;

    case "toISOString":
      displayOutput("Formatted date: " + date.toISOString());
      break;
  }

}

function calculateDifference() {
  const dateInput = document.getElementById("date-input").value;
  const secondDateInput = document.getElementById("second-date").value;

  const date1 = new Date(dateInput);
  const date2 = new Date(secondDateInput);

  const diff = Math.abs(date2 - date1);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  displayOutput("Difference in days: " + days);
}
