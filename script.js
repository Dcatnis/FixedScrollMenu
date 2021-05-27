const date=document.getElementById("date")
date.innerHTML = new Date().getFullYear()

const navtoggle=document.querySelector(".nav-toggle")
const linksContainer=document.querySelector(".links-container")
const Links=document.querySelector(".links")

navtoggle.addEventListener("click",function(){
    // linksContainer.classList.toggle("show-links") -ACESTA ESTE STATIC NE SCHIMBATOR DUPA DIMENSIUNE

    // ACESTA VA FI MAI FLEXIBIL IN DEPENDENTA DE DIMENSIUNE
    const linksheight=Links.getBoundingClientRect().height
    const containerheight=linksContainer.getBoundingClientRect().height

    if(containerheight===0){
        linksContainer.style.height=`${linksheight}px`
    }else{
        linksContainer.style.height=0
    }
})

const navbar=document.getElementById("nav")
const toplink=document.querySelector(".top-link")

window.addEventListener("scroll",function(){
    const scrollheight=window.pageYOffset
    const navheight=navbar.getBoundingClientRect().height
    if(scrollheight>navheight){
        navbar.classList.add("fixed-nav")
        toplink.classList.add("show-link")
    }else{
        navbar.classList.remove("fixed-nav")
        toplink.classList.remove("show-link")
    }
})

/* smooth scroll */
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights