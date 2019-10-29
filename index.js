const wholeWrapper = document.querySelector('.main-wrapper')
const formWrapper = document.querySelector('.form-wrapper')

wholeWrapper.addEventListener('mousemove', (e) => {
    const moveX = (e.pageX / 115)
    const moveY = (e.pageY / 115)
    formWrapper.style.transform = `translate(-${moveX}px, -${moveY}px)`
})