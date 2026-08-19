const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')
const form = document.getElementById('formulario')

const user = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value
}

import { registerUser } from "api.js"

async function register() {
    const response = await registerUser(user)
}

form.addEventListener("submit", function(event) {
        event.preventDefault()
        register()
    })