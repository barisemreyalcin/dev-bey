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

// Rotate Skills and Project Cards
const projectCards = document.querySelectorAll(".project");
const skillBoxes = document.querySelectorAll(".skill");
const btnGroupEl = document.querySelectorAll(".btn-group-el");

function animateSkills(items, degree, interval) {
  items.forEach(function (item) {
    setInterval(function () {
      item.style.transform = `rotate(${degree}deg)`;
      setTimeout(function () {
        item.style.transform = "rotate(0deg)";
      }, 500);
    }, `${interval}`);
  });
}

animateSkills(skillBoxes, 5, 3500);
animateSkills(projectCards, 0.75, 5000);
animateSkills(btnGroupEl, 30, 3500);

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
if (closeModal) {
  closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  })
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
} else {
  console.log("closeModal button does not exist on this page.");
}

// Slider
const nextImg = document.querySelector(".modal-container .fa-chevron-right");
const prevImg = document.querySelector(".modal-container .fa-chevron-left");

if(nextImg && prevImg) {
  nextImg.addEventListener("click", function() {
    currentIndex++;
    currentIndex === smallImg.length && (currentIndex = 0);
    imgPath = smallImg[currentIndex].src;
    largeImg.src = imgPath;
    largeImg.style.animation = "fadeShadow .5s";
    reflowAnime(largeImg, "fadeShadow", ".5s", "ease");
  })
  
  prevImg.addEventListener("click", function() {
    currentIndex--;
    currentIndex === -1 && (currentIndex = smallImg.length - 1);
    imgPath = smallImg[currentIndex].src;
    largeImg.src = imgPath;
    largeImg.style.animation = "fadeShadow .5s";
    reflowAnime(largeImg, "fadeShadow", ".5s", "ease");
  })
} else {
  console.log("Slider does not exist on this page.");
}

// Reflow Animation
function reflowAnime(item, animationName, duration, timingFnc) {
  void item.offsetWidth;
  item.style.animation = "none";
  void item.offsetWidth;
  item.style.animation = `${animationName} ${duration} ${timingFnc}`;
}

// Copy Link To Clipboard
const emailAddress = document.querySelector(".mail-address");
const copyBtn = document.querySelector(".copy");
const alertEl = document.querySelector(".alert");

if(copyBtn) {
  copyBtn.addEventListener("click", function() {
    const copiedText = emailAddress.textContent;
    navigator.clipboard.writeText(copiedText).then(function() {
      alertEl.style.animation = "alertMove 2.5s ease";
      reflowAnime(alertEl, "alertMove", "2.5s", "ease");
    })
  })
} else {
  console.log("Copy button does not exist on this page.");
}