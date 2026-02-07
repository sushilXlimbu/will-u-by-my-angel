const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const catImage = document.getElementById('catImage');
const mainContainer = document.getElementById('mainContainer');
const yesContainer = document.getElementById('yesContainer');

const noTexts = [
  "Are you sure?",
  "Pookie please",
  "Don't do this to me :(",
  "You're breaking my heart",
  "I'm gonna cry..."
];

const catImages = [
  "assets/img2.jpeg",
  "assets/img3.jpeg",
  "assets/img4.jpeg",
  "assets/img5.jpeg",
  "assets/img6.jpeg"
];

let noClickCount = 0;

noBtn.addEventListener('click', () => {
  if (noClickCount < noTexts.length) {
    noBtn.textContent = noTexts[noClickCount];
    catImage.src = catImages[noClickCount];
    noClickCount++;
  } else {
    noBtn.textContent = "Just say yes 😭";
  }
});

yesBtn.addEventListener('click', () => {
  mainContainer.classList.add('hidden');
  yesContainer.classList.remove('hidden');
});
