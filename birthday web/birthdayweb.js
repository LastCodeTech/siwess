let allImages = document.querySelectorAll('#allImages img');
let screenImg = document.querySelector('#screen img'); 
let dspl = document.getElementById('screen');
let close = document.getElementById('close');
let glass = document.getElementById('glass');

// open modal on image click
allImages.forEach(img => {
  img.addEventListener('click', function () {
    let source = img.src;
    screenImg.setAttribute('src', source);
    dspl.style.display = 'flex';
    glass.style.display = 'block';
  });
});

// close modal on close button
close.addEventListener('click', function () {
  dspl.style.display = 'none';
  glass.style.display = 'none';
});

// also close modal when clicking glass overlay
glass.addEventListener('click', function () {
  dspl.style.display = 'none';
  glass.style.display = 'none';
});
// 1. Set the target date (adjust year/month/day as needed)
const birthday = new Date("2025-09-23 00:00:00").getTime();

// 2. Run countdown every second
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = birthday - now;

  // 3. Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 4. Update DOM
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // 5. If countdown ends
  if (distance < 0) {
    clearInterval(timer);
    document.querySelector("#countdown-message").textContent = "🎉 It's her Birthday! 🎂💖";
  }
}, 1000);

// Select all buttons with the class
const celebrateBtns = document.querySelectorAll(".celebrateBtn");

celebrateBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Simple confetti burst
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });

    // Optional: burst again after 1 second
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 }
      });
    }, 1000);
  });
});



    document.querySelectorAll(".quiz-option").forEach(btn => {
  btn.addEventListener("click", () => {
    const reply = btn.dataset.reply;
    const responseBox = btn.parentElement.parentElement.querySelector(".quiz-response");
    responseBox.textContent = reply;

    // Add highlight to chosen button
    btn.parentElement.querySelectorAll(".quiz-option").forEach(opt => {
      opt.classList.remove("ring-4", "ring-yellow-400");
    });
    btn.classList.add("ring-4", "ring-yellow-400");
  });
});




      
