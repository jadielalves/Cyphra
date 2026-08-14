export async function registerUser(user) {
    return fetch("http://localhost:3000/usuarios", {
        method: 'POST',
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
}

