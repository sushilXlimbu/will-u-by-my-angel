const photo = document.getElementById('photo');

const images = [
  'assets/IMG_20231123_171258.jpg',
  'assets/IMG_20231123_171350.jpg',
  'assets/IMG_20240803_202356.jpg',
  'assets/IMG_20240803_202407.jpg',
  'assets/IMG_20240804_090443.jpg',
  'assets/IMG_20240804_090644.jpg',
  'assets/IMG_20240806_184734.jpg',
  'assets/IMG_20240806_185126.jpg',
  'assets/IMG_20240806_185130.jpg',
  'assets/IMG_20240814_200915.jpg',
  'assets/IMG_20240814_200940.jpg',
  'assets/IMG_20250211_184116.jpg',
  'assets/IMG_20250211_184116__01.jpg',
  'assets/IMG_20250214_202859.jpg',
  'assets/20250515_145030.jpg',
  'assets/20250515_145043.jpg',
  'assets/20250515_145046.jpg',
  'assets/20250515_145052.jpg',
  'assets/20250515_185034.jpg',
  'assets/20250515_185043.jpg',
  'assets/20250515_185050.jpg',
  'assets/20250515_185456.jpg',
  'assets/20250515_185719.jpg',
  'assets/20250515_185727.jpg',
  'assets/20250515_185736.jpg',
  'assets/20250515_190957.jpg',
  'assets/20250515_191004.jpg',
  'assets/20250515_191024.jpg',
  'assets/20250515_191030.jpg',
  'assets/20250515_224601.jpg',
  'assets/20250515_224606.jpg',
  'assets/20250517_112359.jpg',
  'assets/20250517_112403.jpg',
  'assets/20250517_112407.jpg',
  'assets/20250517_112410.jpg',
  'assets/20250517_112417.jpg',
  'assets/20250517_132119.jpg',
  'assets/20250517_132127.jpg',
  'assets/20250524_130647.jpg',
  'assets/20250524_130650.jpg',
  'assets/20250527_161727.jpg',
  'assets/20250527_161812.jpg',
  'assets/20250528_073356.jpg',
  'assets/20250709_072900.jpg',
  'assets/20250713_091457.jpg',
  'assets/20250719_143843.jpg',
  'assets/20250726_103543.jpg',
  'assets/20250830_125219.jpg'
 
];

let current = 0;

function showPhoto(index) {
  photo.src = images[index];
}

function nextPhoto() {
  current = (current + 1) % images.length;
  showPhoto(current);
}

function prevPhoto() {
  current = (current - 1 + images.length) % images.length;
  showPhoto(current);
}
