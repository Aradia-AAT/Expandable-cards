const elemento = document.querySelectorAll('.elemento')

elemento.forEach(elemento => {
    elemento.addEventListener('click', () => {
        removeActiveClasses()
        elemento.classList.add('activo')
    })
})

function removeActiveClasses() {
    elemento.forEach(elemento => {
        elemento.classList.remove('activo')
    })
}