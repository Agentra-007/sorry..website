// ---- Runaway button logic ----
const btnArea = document.getElementById('btnArea');
const runawayBtn = document.getElementById('runawayBtn');

function moveButtonAway() {
  const areaRect = btnArea.getBoundingClientRect();
  const btnRect = runawayBtn.getBoundingClientRect();

  // Max positions so the button stays fully inside btnArea
  const maxX = areaRect.width - btnRect.width;
  const maxY = areaRect.height - btnRect.height;

  const randomX = Math.max(0, Math.random() * maxX);
  const randomY = Math.max(0, Math.random() * maxY);

  runawayBtn.style.left = `${randomX}px`;
  runawayBtn.style.top = `${randomY}px`;
}

// Trigger the dodge on hover (mouseenter fires once per hover, not per pixel)
runawayBtn.addEventListener('mouseenter', moveButtonAway);

// Optional: also dodge if the user manages to click it, for extra fun
runawayBtn.addEventListener('click', (e) => {
  e.preventDefault();
  moveButtonAway();
});

// ---- Fixed button logic ----
const fixedBtn = document.getElementById('fixedBtn');

fixedBtn.addEventListener('click', () => {
  window.location.href = 'main.html'; // change this to your target page/URL
});
