// menu button section
document.addEventListener("DOMContentLoaded", function(){

    const menuButton= document.querySelector(".menu-button");
    const menuLinks= document.querySelector(".menu-links");
    let loogo = document.getElementById("logo");

    menuButton.addEventListener("click",function(){
        menuLinks.classList.toggle("active");
        loogo.classList.toggle("disappear");
    })

    document.addEventListener("click", function (event) {
        if (!menuButton.contains(event.target) && !menuLinks.contains(event.target)){
            menuLinks.classList.remove("active");
            loogo.classList.remove("disappear");
        }
    });

})


// scroll button section
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const inputs = document.querySelectorAll(".input");
let topbutton = document.getElementById("top");
topbutton.style.display = "none";

document.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        topbutton.style.display = "flex";
    }else{
        topbutton.style.display = "none";
    }
})


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

