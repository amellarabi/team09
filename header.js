// menu button section
document.addEventListener("DOMContentLoaded", function(){

    const menuButton= document.querySelector(".menu-button");
    const menuLinks= document.querySelector(".menu-links");

    menuButton.addEventListener("click",function(){
        menuLinks.classList.toggle("active");
    })

    document.addEventListener("click", function (event) {
        if (!menuButton.contains(event.target) && !menuLinks.contains(event.target)){
            menuLinks.classList.remove("active");
        }
    });

})

//   scroll button section
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const inputs = document.querySelectorAll(".input");
let topbutton = document.getElementById("top");
topbutton.style.display = "none";

document.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        topbutton.style.display = "flex";
    }else{
        topbutton.style.display = "none";
    }
})


// our latest news section
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  
});

// dark mode section
let darkmode = localStorage.getItem('darkmode')
const themeSwitch= document.getElementById('theme-switch')

const enableDarkmode = () =>{
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () =>{
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', 'null')
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", ()=>{
    darkmode = localStorage.getItem('darkmode')
    darkmode!== "active" ? enableDarkmode() : disableDarkmode()
})
