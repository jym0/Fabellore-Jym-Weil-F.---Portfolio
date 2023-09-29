const countingValue = document.getElementById("loader");
const allContents = document.querySelector('.all-contents');

let counter = 0;
const interval = setInterval(() => {
  countingValue.textContent = counter + "%";
  counter++;

  if (counter > 100) {
    clearInterval(interval);
    document.getElementById("loader-container").style.display = "none";
    allContents.style.display = "block";
  }
}, 30);

//-----------------------------------------------------//
const typed = new Typed(".typewriter", {
  strings: ["Web Designer", "Graphic Designer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

//----------------------------------------------//

// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//   cursor.setAttribute('style', 'top: ' + (e.pageY - 20) + 'px; left: ' + (e.pageX - 20) + 'px;')
// });

//--------------NAVS----------------------------//

window.onload = function () {
  showIntroText();
  
};



function showContent(contentId, link) {
  const contents = document.getElementsByClassName("content");

  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
    var container = document.querySelector(".for_animation");
    container.classList.toggle("visible");
  }

  const content = document.getElementById(contentId);
  content.style.display = "block";

  const currentNavItem = document.querySelector("a.active");
  if (currentNavItem) {
    currentNavItem.classList.remove("active");
  }

  link.classList.add("active");

  const introText = document.getElementById("introId");
  introText.style.display = "none";

  const centerContents = document.getElementById("centerId");
  centerContents.style.display = "block";

  // Get the target container element
  const targetContainer = document.getElementById("centerId");

  // Scroll within the target container
  if (targetContainer) {
    targetContainer.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}






function showIntroText() {
  const introText = document.getElementById("introId");
  introText.style.display = "block";

  const contents = document.getElementsByClassName("content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  const links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }

  const centerContents = document.getElementById("centerId");
  centerContents.style.display = "none";
}


//----------------RESUME--------------------------//

//------------SKILLS RENDER --------------------------------//
let skillsHTML = "";

skills.forEach((contents) => {
  skillsHTML += `<p class="skills">${contents.title}</p>
                            <div class="progress-bar"><div class="progress" id="${contents.progress}"></div></div><div class="ratings"><p>Beginner</p><p>User</p><p>Professional</p><p>Expert</p></div>`;
});

document.getElementById('skills_container').innerHTML = skillsHTML;
//------------------------------------------------------------------------//

function setProgress(progress, progressBarId) {
  const progressBar = document.querySelector(`#${progressBarId}`);
  progressBar.style.width = `${progress}%`;
}

setProgress(45, "progress1");
setProgress(45, "progress2");
setProgress(10, "progress3");
setProgress(15, "progress4");
setProgress(15, "progress5");
setProgress(8, "progress6");
setProgress(8, "progress7");
setProgress(8, "progress8");
setProgress(10, "progress9");
setProgress(10, "progress10");
setProgress(47, "progress11");
setProgress(10, "progress12");

//-------------TESTIMONIALS-----------------------//
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//------------------LOGO---------------------//

setInterval(function () {
  const colorChange = document.getElementById("em");
  const underscore = document.getElementById("underscore");

  if (colorChange.style.color === "rgb(110, 46, 26)") {
    colorChange.style.color = "#c3b091";
    underscore.style.visibility = "visible";
  } else {
    colorChange.style.color = "#6e2e1a";
    underscore.style.visibility = "hidden";
  }
}, 1300);

setInterval(function () {
  const colorChange = document.getElementById("em-two");
  const underscore = document.getElementById("underscore-two");

  if (colorChange.style.color === "rgb(110, 46, 26)") {
    colorChange.style.color = "#c3b091";
    underscore.style.visibility = "visible";
  } else {
    colorChange.style.color = "#6e2e1a";
    underscore.style.visibility = "hidden";
  }
}, 1300);

//--------------------------------------------//

//---------------CONTACTS-MODAL------------------------------//
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const submitMail = document.getElementById("submit_message");
  const closeBtn = document.getElementsByClassName("closeModal")[0];

  submitMail.addEventListener("click", function () {
    // Check if the form fields are blank before displaying the modal
    const form = document.getElementById("contact_form"); // Replace "yourFormId" with your actual form ID
    const formInputs = form.querySelectorAll(
      "input[type='text'], input[type='email'], input[type='number'], textarea"
    );

    let areFieldsBlank = false;

    formInputs.forEach((input) => {
      if (input.value.trim() === "") {
        areFieldsBlank = true;
      }
    });

    if (!areFieldsBlank) {
      modal.style.display = "block";
    }
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  const form = document.getElementById("contact_form");
  const errorMessage = document.getElementById("errorMessage");
  const submitBtn = document.getElementById("submit_message");
  const serviceID = "service_uab0i3k";
  const templateID = "template_rbkt3lp";

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputs = form.getElementsByTagName("input");
    const textarea = form.getElementsByTagName("textarea")[0];
    let isEmpty = false;
    let isEmailValid = true;

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        inputs[i].classList.add("shake");
        isEmpty = true;
      } else {
        inputs[i].classList.remove("shake");
      }
    }

    if (textarea.value === "") {
      textarea.classList.add("shake");
      isEmpty = true;
    } else {
      textarea.classList.remove("shake");
    }

    // Email validation
    const emailInput = form.querySelector("input[type='email']");
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      emailInput.classList.add("shake");
      isEmailValid = false;
    } else {
      emailInput.classList.remove("shake");
    }

    if (isEmpty) {
      errorMessage.textContent = "Please fill all fields.";
      setTimeout(function () {
        errorMessage.textContent = "";
      }, 2000);

      return; // Do not proceed with form submission
    } else if (!isEmailValid) {
      errorMessage.textContent = "Invalid email!";
    } else {
      errorMessage.textContent = "";
    }

    // If all validations pass, update the button value and then send the email
    submitBtn.setAttribute("value", "Sending...");

    emailjs.sendForm(serviceID, templateID, form).then(
      () => {
        submitBtn.setAttribute("value", "Send Email");
        // Reset form and shake animations
        resetForm(inputs, textarea, emailInput);
      },
      (err) => {
        submitBtn.setAttribute("value", "Send Email");
        alert(JSON.stringify(err));
      }
    );
  });

  function resetForm(inputs, textarea, emailInput) {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("shake");
    }
    textarea.classList.remove("shake");
    emailInput.classList.remove("shake");
    form.reset();
  }
});



//--------------- PROJECTS RENDER ----------------//

let projectsHTML = "";

projects.forEach((contents) => {
  projectsHTML += `<div class="projects_container ${contents.type}">
                            <div class="projects_content">
                                <img src="${contents.image}" data-item="${contents.type}" alt="">
                                <div class="projects_desc">
                                    <p>${contents.title}</p>
                                    <div class="projects_link_btn">
                                        <ion-icon name="eye-outline" class="preview_btn" title="Preview" onclick="${contents.linksBtn.previewBtn}"></ion-icon>
                                        <a href="${contents.linksBtn.details}" target="_blank" title="More details"><ion-icon name="link-outline"></ion-icon></a>
                                    </div>
                                </div>
                            </div>
                    </div>`;
});

document.querySelector(".js-projects").innerHTML = projectsHTML;

//----------------PROJECTS FILTER--------------------------------//
const category = document.querySelector(".category");
const category_content = document.querySelectorAll(".projects_container");

category.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter")) {
    category.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const filterValue = e.target.getAttribute("data-filter");

    category_content.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.add("show");

        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  }
});

//-----------------PROJECTS-PREVIEW------------------------//

const imagePreview = [
  "images/p2.png",
  "images/p1.png",
  "images/p3.png",
  "images/p4.png",
  "images/p5.png",
  "images/p6.png",
  "images/p7.png",
  "images/p8.png",
  "images/p-w1.png",
  "images/p-w2.png",
  "images/p-w3.png",
  "images/p-w4.png",
];

const videos = [
  "videos/jaehub.mp4",
  "videos/fbreels.mp4",
  "videos/Financial Management.mp4",
  "videos/shortVideo.mp4",
  "videos/Converge.mp4",
];

let currentIndex = 0; // Keep track of the current index

function changeMedia(delta) {
  currentIndex += delta; // Increment or decrement the index based on delta
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex >= imagePreview.length) {
    currentIndex = imagePreview.length - 1;
  }
  const mediaType = getCurrentMediaType();
  showPreview(currentIndex, mediaType);
}

function getCurrentMediaType() {
  // Determine if the current media is an image or video
  return imagePreview[currentIndex] ? "image" : "video";
}

function showPreview(index, type) {
  const shadow = document.querySelector(".shadow");
  const previewBox = document.querySelector(".preview_box");
  const previewProjects = document.getElementById("preview_projects");

  previewProjects.innerHTML = "";

  if (type === "image") {
    const img = document.createElement("img");
    img.src = imagePreview[index];
    previewProjects.appendChild(img);
  } else if (type === "video") {
    const video = document.createElement("video");
    video.controls = true;
    video.autoplay = true;
    const source = document.createElement("source");
    source.src = videos[index];
    source.type = "video/mp4";
    video.appendChild(source);
    previewProjects.appendChild(video);
  }

  const prevButton = document.querySelector(".prev_btn_projects");
  const nextButton = document.querySelector(".next_btn_projects");
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === imagePreview.length - 1;

  prevButton.style.opacity = prevButton.disabled ? 0 : 1;
  nextButton.style.opacity = nextButton.disabled ? 0 : 1;

  shadow.style.display = "block"; // Show the overlay
  previewBox.style.display = "block"; // Show the lightbox
}

function closePreview() {
  const previewShadow = document.querySelector(".shadow");
  const previewbox = document.querySelector(".preview_box");

  previewShadow.style.display = "none"; // Hide the overlay
  previewbox.style.display = "none"; // Hide the lightbox
}
