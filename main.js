
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }
        const callNow = immediate && !timeout;
        clearTimeout(timeout)
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }
}




const targetAnim = document.querySelectorAll('[data-aboutanim]');
const classAnimation = 'animate';

function aboutMeScroll() {
    const windowPosition = window.pageYOffset + ((window.innerHeight * 3) / 4)
    targetAnim.forEach(function(element) {
            if((windowPosition) > element.offsetTop) {
                element.classList.add(classAnimation);
                console.log("animation rolled")
            }
            else {
                element.classList.remove(classAnimation);
            }; 
    })

}

aboutMeScroll();


if(targetAnim.length) {
window.addEventListener('scroll', debounce(function() {
    aboutMeScroll();
}, 200));
}