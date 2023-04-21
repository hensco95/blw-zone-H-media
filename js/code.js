// dynamic date
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

// console.log(date.innerHTML);



// close links //
const navToggle = document.querySelector(".nav_toggle");
const linksContainer = document.querySelector(".nav_links");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // linksContainer.classList.toggle("show")
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
})


// fixed nav bar //

const navBar = document.getElementById("nav");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navBar.classList.add("fixed_nav");
  } else {
    navBar.classList.remove("fixed_nav");
  }

})

// scroll link //
const scrollLinks = document.querySelectorAll(".scroll_link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // console.log(element.offsetTop);
    

    // calculate the heights
    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    const fixedNav = navBar.classList.contains("fixed_nav"); 
    let position = element.offsetTop - navHeight;
    
    
    if (window.innerWidth < 800) {
      if (!fixedNav) {
        position = position - 177;
      }
      if (navHeight > 82) {
        position = position + containerHeight;
      }
    }
    

    // console.log(window.innerWidth);

    // let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position
    });
    linksContainer.style.height = 0;
  })
})




// slider for mile stone //

let slideCount = 1;
showSlides(slideCount);

function addSlides(n) {
  showSlides(slideCount += n);
}

function currSlide(n){
  showSlides(slideCount = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideCount = 1;
  }
  if (n < 1) {
    slideCount = slides.length;
  }

  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideCount - 1].style.display = "block";
  dots[slideCount - 1].className += " active";
}


// auto slide show

let slideIndex = 0;


function autoSlide() {


  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(autoSlide, 3000);
}

autoSlide();



// swiper feature //
var swiper = new Swiper(".slide-container", {
  // slidesPerView: 2,
  spaceBetween: 70,
  // centeredSlides: true,
  // slidesPerGroup: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView:1,
    },
    520: {
      slidesPerView:1
    },
    650: {
      slidesPerView:2
    },
    // 900: {
    //   slidesPerView:3
    // }
  }
});

