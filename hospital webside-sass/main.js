const navItem = document.querySelector("#nav_items");
const openNavBtn = document.querySelector("#open_nav-btn");
const closeNavBtn = document.querySelector("#close_nav-btn");

openNavBtn.addEventListener("click", () => {
  navItem.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
});

const closeNav = () => {
  navItem.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

closeNavBtn.addEventListener("click", closeNav);

// close nav meniu when menu a menu item is clicked
if(window.innerWidth < 1024) {
  document.querySelectorAll('#nav_items li a').forEach(navItem => {
    navItem.addEventListener('click', () => {
      closeNav()
    })
  })
}


// change navbar style on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// TESTIMONIALS SECTION (swiper js)
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // responsives
  breakpoints: {
    // when window width is >= 600px 
    600: {
      slidesPerView: 2
    },
// when window width is >= 1024px 
    1024: {
      slidesPerView: 3
    }
  } 
});


