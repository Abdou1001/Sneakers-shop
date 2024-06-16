// ==================     Show nav manu    =================
const navManu = document.getElementById("nav_manu")
const navToggle = document.getElementById("nav_toggle")
const navClose = document.getElementById("nav-close")

navToggle.addEventListener("click", _ => {
    navManu.classList.add("open")
})
navClose.addEventListener("click", _ => {
    navManu.classList.remove("open")
})

// =============== when click on links close nav manu ===============
const navLinks = document.querySelectorAll(".nav_link ")

navLinks.forEach(ele => {
    ele.addEventListener("click", _ => {
        navManu.classList.remove("open")
    })
});

// ======= Swiper Home ==========
let swiperImges = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween: 64,
    grabCursor: true,  
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        type: "fraction"
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let swiperTitles = new Swiper('.home_titles', {
    loop: true,
    spaceBetween: 64,
    grabCursor: true,  
    centeredSlides: true
});

swiperImges.controller.control = swiperTitles
swiperTitles.controller.control = swiperImges

// ================== CHANGE BACKGROUND HEADER =========================
window.addEventListener("scroll", _ => {
    const header = document.getElementById("header")
    // add a class if the botton=m offset is greater then 50 of the veiwport
    this.scrollY >= 50  ? header.classList.add("bg-header")
                        : header.classList.remove("bg-header")
})
