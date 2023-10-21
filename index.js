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

// Accordion
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
    chevronIcon[i].style.transition = ".6s";
  })
}