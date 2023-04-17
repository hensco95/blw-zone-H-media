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
    

    // calculate the heights
    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    const fixedNav = navBar.classList.contains("fixed_nav"); 
    let position = element.offsetTop - navHeight;
    
    
    if (window.innerWidth < 800) {
      if (!fixedNav) {
        position = position - 142;
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
