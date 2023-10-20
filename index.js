const openNavigationBtn = document.querySelector(".open");
const closeNavigationBtn = document.querySelector(".close");
const navigation = document.querySelector(".navigation");

openNavigationBtn.addEventListener("click", function() {
  navigation.classList.add("active");
  closeNavigationBtn.style.display = "inline-block";
  openNavigationBtn.style.display = "none";
})

closeNavigationBtn.addEventListener("click", function() {
  navigation.classList.remove("active");
  openNavigationBtn.style.display = "inline-block";
  closeNavigationBtn.style.display = "none";
})
