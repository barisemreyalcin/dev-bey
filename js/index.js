// Mobile Navbar
const openNavigationBtn = document.querySelector(".open");
const closeNavigationBtn = document.querySelector(".close");
const navigation = document.querySelector(".navigation");

openNavigationBtn.addEventListener("click", function() {
  navigation.classList.add("mobile-menu");
  closeNavigationBtn.style.display = "inline-block";
  openNavigationBtn.style.display = "none";
})

closeNavigationBtn.addEventListener("click", function() {
  navigation.classList.remove("mobile-menu");
  openNavigationBtn.style.display = "inline-block";
  closeNavigationBtn.style.display = "none";
})

// Accordion with chevron
const accordionHeader = document.getElementsByClassName("accordion-header");
const accordionContainer = document.getElementsByClassName("accordion-container");
const chevronIcon = document.getElementsByClassName("fa-chevron-down");

for(let i = 0; i < accordionHeader.length; i++) {
  accordionHeader[i].addEventListener("click", function() {
    accordionContainer[i].classList.toggle("accordion-active");
    if(accordionContainer[i].classList.contains("accordion-active")) {
      chevronIcon[i].style.transform = "rotate(180deg)";
    } else {
      chevronIcon[i].style.transform = "rotate(0)";
    }
    chevronIcon[i].style.transition = "transform .6s";
  })
}

// Rotate Skills
const skillBoxes = document.querySelectorAll(".skill");
function animateSkills(skillBox) {
  setTimeout(function() {
    skillBox.style.transform = 'rotate(5deg)';
    setTimeout(function() {
      skillBox.style.transform = 'rotate(0deg)';
    }, 500);
  }, 500);
}

skillBoxes.forEach(function(skillBox) {
  setInterval(function() {
    animateSkills(skillBox);
  }, 3500);
});

// Modal
const smallImgOverlay = document.getElementsByClassName("certificate-overlay"); // we should click overlay because img cannot be clickable because  of the z-index of img
const smallImg = document.getElementsByClassName("certificate-img");
const modal = document.querySelector(".certificate-modal");
const closeModal = document.querySelector(".certificate-modal .fa-xmark");
let largeImg = document.getElementById("modal-image");
let currentIndex = 0;

for(let i = 0; i < smallImg.length; i++) {
  smallImgOverlay[i].addEventListener("click", function() {
    let imgPath = smallImg[i].src;
    modal.style.display = "flex";
    largeImg.src = imgPath;
    currentIndex = i;
    largeImg.style.animation = "fadeShadow .5s";
  })
}

// Close Modal
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
})

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
};

// Slider
const nextImg = document.querySelector(".modal-container .fa-chevron-right");
const prevImg = document.querySelector(".modal-container .fa-chevron-left");

nextImg.addEventListener("click", function() {
  currentIndex++;
  currentIndex === smallImg.length && (currentIndex = 0);
  imgPath = smallImg[currentIndex].src;
  largeImg.src = imgPath;
  largeImg.style.animation = "fadeShadow .5s";
  reflowAnime();
})

prevImg.addEventListener("click", function() {
  currentIndex--;
  currentIndex === -1 && (currentIndex = smallImg.length - 1);
  imgPath = smallImg[currentIndex].src;
  largeImg.src = imgPath;
  largeImg.style.animation = "fadeShadow .5s";
  reflowAnime();
})

// Reflow Animation
function reflowAnime() {
  void largeImg.offsetWidth;
  largeImg.style.animation = "none";
  void largeImg.offsetWidth;
  largeImg.style.animation = "fadeShadow .5s";
}