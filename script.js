const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 80);
});
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})
sr.reveal ('.header',{delay:300});
sr.reveal ('.header-content',{delay:400});
sr.reveal ('.features',{delay:500});
sr.reveal ('.footer',{delay:300});
sr.reveal ('.row',{delay:300});