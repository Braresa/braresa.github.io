const targetAnim = document.querySelectorAll('[data-aboutanim]');
const classAnimation = 'animate';

function aboutMeScroll() {
    const windowPosition = window.pageYOffset + ((window.innerHeight * 3) / 4)
    targetAnim.forEach(function(element) {
            if((windowPosition) > element.offsetTop) {
                element.classList.add(classAnimation);
            }
            else {
                element.classList.remove(classAnimation);
            }; 
    })

}

window.addEventListener('scroll', function() {
    aboutMeScroll();
})