// Set the target date for the countdown (year, month (zero-based), day, hour, minute, second)
var targetDate = new Date("2024-07-01T00:00:00");

// Update the countdown timer every second
var countdownInterval = setInterval(function () {
  // Get the current date and time
  var currentDate = new Date();

  // Calculate the difference between the target date and the current date
  var timeDifference = targetDate.getTime() - currentDate.getTime();

  // Check if the target date has passed
  if (timeDifference <= 0) {
    clearInterval(countdownInterval); // Stop the countdown if the target date has passed
    return;
  }

  // Calculate the remaining time components (days, hours, minutes, seconds)
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the countdown display with the remaining time
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000); // Update the countdown every second
