// Hamburger menu open and close

const myFunction = () => {
  let x = document.getElementById("mobile-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

// Countdown Timer

const countDownDate = new Date("feb 15, 2025 12:30").getTime();

const x = setInterval(() => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById(
    "countdown"
  ).textContent = `${days}d ${hours}h ${minutes}m`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Time Has Run Out";
  }
}, 1000);
