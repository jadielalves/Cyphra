
import { createError, removeError } from "./utils.js"

const form = document.getElementById('form')


form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const verify = document.getElementById('verify').value

    // VALIDAÇÃO

})