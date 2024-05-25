const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80);
}); // плавное появление и фиксирование навигационной шапки с прокруткой

//раскрытие меню-гамбургера
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};


//скролл
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})
sr.reveal ('.home-text', {delay: 300}); 
sr.reveal ('.home-img', {delay: 430}); 
sr.reveal ('.container', {delay: 300}); 

sr.reveal ('.about-img', {}); 
sr.reveal ('.about-text', {delay: 300});

sr.reveal ('.middle-text', {}); 
sr.reveal ('.row-btn,.shop-content', {delay: 300});

sr.reveal ('.review-content,.contact', {delay: 300});

//сммена темы
document.getElementById('themeToggle').addEventListener('click', function() {
    const currentTheme = document.body.className;
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
    } else {
        document.body.className = 'light-theme';
    }
});
