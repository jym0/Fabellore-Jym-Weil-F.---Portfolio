const darkmode = new Darkmode();
darkmode.toggle();

const darkModeButton = document.querySelector(".dark-btn");
const image = document.querySelector(".fimg");

function updateImageSource() {
  const isDarkMode = darkmode.isActivated();

  if (isDarkMode) {
    image.src = "images/id3.jpg";
  } else {
    image.src = "images/id4.jpg";
  }
}

darkModeButton.addEventListener("click", function () {
  updateImageSource();
});

updateImageSource();

const darkModeButtonTwo = document.querySelector(".dark-btn");
const imageTwo = document.querySelector(".div_info_img");

function updateImageSourceTwo() {
  const isDarkModeTwo = darkmode.isActivated();

  if (isDarkModeTwo) {
    imageTwo.src = "images/id3.jpg";
  } else {
    imageTwo.src = "images/id4.jpg";
  }
}

darkModeButtonTwo.addEventListener("click", function () {
  updateImageSourceTwo();
});

updateImageSourceTwo();

const darkModeButtonThree = document.querySelector(".dark-btn");
const imageThree = document.querySelector(".fimg2");

function updateImageSourceThree() {
  const isDarkModethree = darkmode.isActivated();

  if (isDarkModethree) {
    imageThree.src = "images/id3.jpg";
  } else {
    imageThree.src = "images/id4.jpg";
  }
}

darkModeButtonThree.addEventListener("click", function () {
  updateImageSourceThree();
});

updateImageSourceThree();
