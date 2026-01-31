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
  "I'm gonna cry...",
  "Just say yes 😭"
];

const catImages = [
  "assets/img2.jpg",
  "assets/img3.jpg",
  "assets/img4.jpg",
  "assets/img5.jpg",
  "assets/img6.jpg",
  "assets/img7.png"

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
