let link = "https://66e7e69cb17821a9d9da6ec1.mockapi.io/logIn";

let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById('loginBtn');
let backBtn = document.getElementById('backBtn')

loginBtn.addEventListener('click', () => {
    if (email.value == '' || password.value == '') {
        window.alert('fill all the fields')
    } else {
        checkEmail(email.value).then(isFound => {
            if (!isFound) {
                window.alert('there is no account with this email')
            } else {
                fetch(link).then(res => res.json()).then(users => {
                    let user = users.find(user => user.email == email.value);
                    if (password.value != user.password) {
                        window.alert('incorrect password')
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
  