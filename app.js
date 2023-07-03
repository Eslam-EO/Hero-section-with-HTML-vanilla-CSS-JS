navBtns = document.querySelectorAll(".menu-btn"); // select nav menu buttons
sideNav = document.querySelector(".mobile-side-nav") //
sideNavOpen = document.querySelector(".mobile-nav-btn"); // select mobile nav button
sideNavClose = document.getElementById("close"); //
sideNavBtns = document.querySelectorAll(".mobile-menu-btn"); //
overlay = document.querySelector(".overlay"); //

// show menu
navBtns.forEach(btn => handleNavClick(btn));
sideNavBtns.forEach(btn => handleNavClick(btn));

function handleNavClick(btn) {
  btn.addEventListener("click", (e) => {
    const img = e.target.lastElementChild;
    const menu = e.target.nextElementSibling;
    changeArrow(img);
    menu.classList.toggle("active");
  });
}

let isDown = true;
function changeArrow(img) {
  if (isDown) {
    img.src = "images/icon-arrow-up.svg"
  } else {
    img.src = "images/icon-arrow-down.svg"
  }
  isDown = !isDown;
}

// hide/show side nav
sideNavOpen.addEventListener("click", () => {
  sideNav.classList.add("active");
  overlay.classList.add("active");
})

sideNavClose.addEventListener("click", () => {
  sideNav.classList.remove("active");
  overlay.classList.remove("active");
})
