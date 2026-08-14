const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')

import { registerUser } from "./api.js"

const response = await registerUser(user)

console.log(response)