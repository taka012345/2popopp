console.log("script.jsが正しく読み取れました");

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = '-80px';
    } else {
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
