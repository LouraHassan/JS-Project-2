let link = "https://66e7e69cb17821a9d9da6ec1.mockapi.io/logIn";

let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById('loginBtn');
let backBtn = document.getElementById('backBtn')
let warningEmail = document.getElementById("warning-email");
let warningPassword = document.getElementById("warning-password");
let warningAll = document.getElementById("warning-all");


loginBtn.addEventListener('click', () => {
    if (email.value == '' || password.value == '') {
        email.classList.add('redBorder')
        password.classList.add('redBorder')
        warningAll.textContent = "You must fill all the boxes";
        warningAll.classList.remove("none");
    } else {
        checkEmail(email.value).then(isFound => {
            if (!isFound) {
                email.classList.add('redBorder')
                warningEmail.textContent = 'there is no account with this email'
                warningEmail.classList.remove('none')
            } else {
                fetch(link).then(res => res.json()).then(users => {
                    let user = users.find(user => user.email == email.value);
                    if (password.value != user.password) {
                        password.classList.add('redBorder')
                        warningPassword.textContent = 'Incorrect password'
                        warningPassword.classList.remove('none')
                    }
                    else {
                        let userName = user.firstName
                        console.log("logged in successfully!");
                        localStorage.setItem('userName', userName)
                        window.location.href = 'index.html'
                    }
                })             
            }
        })
    }
})

function checkEmail(email) {
    return fetch(link).then(res => res.json()).then(users => {
        let isFound = users.some(user => user.email == email)
        return isFound
    })
}

function checkPassword(email) {
    return fetch(link).then(res => res.json()).then(users => {
        users.map(user => {
            let correct = false
            if (user.email == email) {
                if (password.value == user.password) {
                    correct =true
                }
            }
            return correct
       })
    })
}
backBtn.addEventListener("click", () => {
    window.location.href = 'index.html'
  })
  