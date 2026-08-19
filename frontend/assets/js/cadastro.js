
import { createError, removeError } from "./utils.js"

const form = document.getElementById('form')

const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const verify = document.getElementById('verify')

name.addEventListener("input", () => {
    const valueName = name.value.trim()

    if(valueName === ''){
        createError(name, "Digite seu nome")
        return
    } else {
        removeError(name)
    }
})


form.addEventListener("submit", (event) => {
    event.preventDefault()



    // VALIDAÇÃO

    // Nome

})