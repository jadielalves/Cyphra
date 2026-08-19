export function createError(campo, mensagem){
    const error = document.createElement("div")

    error.classList.add('error')
    error.textContent = mensagem

    campo.insertAdjacentElement('afterend', error)
}

export function removeError(campo){
    const error = campo.nextElementSibling
    if (error && error.classList.contains('error')){
        error.remove()
    }
}