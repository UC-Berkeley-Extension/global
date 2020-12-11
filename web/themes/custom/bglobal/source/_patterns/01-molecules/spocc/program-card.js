const bbImg = document.querySelectorAll(".bb-img");
const encodeImagePath = stringToEncode =>
  stringToEncode
    .replace(/ |\/|\u2013|\u2014/g, "-")
    .replace(/[()]|,/g, "")
    .toLowerCase();
const imageStyle = (catStringToEncode, prgStringToEncode) =>
  `url('https://extension.berkeley.edu/images/programs/thumbnails/${encodeImagePath(
    catStringToEncode
  )}_${encodeImagePath(prgStringToEncode)}.jpg')`;

bbImg.forEach(img => {
  img.style.background = imageStyle(img.dataset.category, img.dataset.name);
});
