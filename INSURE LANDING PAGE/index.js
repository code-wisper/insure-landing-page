const hamburger = document.getElementById('hamburger')
const mobileClose = document.getElementById('close')
const mobileMenu = document.getElementById('mobileMenu')
const body = document.querySelector('body')

hamburger.addEventListener('click', function() {
    mobileClose.classList.add('show')
    mobileMenu.classList.add('show')
    mobileMenu.style.animation = 'fade-in .4s ease-in forwards'
    body.classList.add('noscroll')

})

mobileClose.addEventListener('click', function() {
    mobileClose.classList.remove('show')
    mobileMenu.classList.remove('show')
    mobileMenu.style.animation = 'fade-out .4s ease-in forwards'
    body.classList.remove('noscroll')
})




