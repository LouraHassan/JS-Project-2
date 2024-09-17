let link = "https://66e7e69cb17821a9d9da6ec1.mockapi.io/logIn";

let inputDiv = document.getElementById("input-div");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm = document.getElementById("confirm");
let signupBtn = document.getElementById("signupBtn");
let backBtn = document.getElementById('backBtn')
let warningName = document.getElementById("warning-name");
let warningEmail = document.getElementById("warning-email");
let warningPassword = document.getElementById("warning-password");
let warningConfirm = document.getElementById("warning-confirm");
let warningAll = document.getElementById("warning-all");
signupBtn.addEventListener("click", () => {
  if (
    fname.value == "" ||
    lname.value == "" ||
    email.value == "" ||
    password.value == "" ||
    confirm.value == ""
  ) {
    fname.classList.add("redBorder");
    lname.classList.add('redBorder')
    email.classList.add("redBorder");
    password.classList.add("redBorder");
    confirm.classList.add("redBorder");
    warningAll.textContent = "You must fill all the boxes";
    warningAll.classList.remove("none");
  }
  else if (!validEmail(email.value)) {
    email.classList.add("redBorder");
      fname.classList.remove("redBorder");
      password.classList.remove("redBorder");
      confirm.classList.remove("redBorder");
    warningEmail.textContent = "Invalid email format";
    warningEmail.classList.remove("none");
    warningName.classList.add("none");
    warningAll.classList.add("none");
    }
  else if (password.value.length < 8) {
    warningPassword.textContent = "Password should be more than 8 characters";
    warningPassword.classList.remove("none");
    warningName.classList.add("none");
    warningEmail.classList.add("none");
    warningAll.classList.add("none");
    password.classList.add("redBorder");
      confirm.classList.add("redBorder");
      fname.classList.remove("redBorder");
      email.classList.remove("redBorder");
        }
  else {
      checkEmail(email.value).then(isFound => {
          if (isFound) {
            fname.classList.add("redBorder");
            email.classList.add("redBorder");
            password.classList.add("redBorder");
            confirm.classList.add("redBorder");
            warningAll.textContent = "Account already exists!";
            warningAll.classList.remove("none");
            warningConfirm.classList.add("none");
          } else {
            fname.classList.remove("redBorder");
            email.classList.remove("redBorder");
            password.classList.remove("redBorder");
            confirm.classList.remove("redBorder");
              fetch(link, {
                  method: 'POST',
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                  body: JSON.stringify({
                      firstName: fname.value,
                      lastName: lname.value,
                      email: email.value,
                      password: password.value,
                  })
              }).then(res => res.json()).then(data => {
                  let userName = fname.value
                  localStorage.setItem('userName', userName)
                  console.log("Account Created");
                  window.location.href = 'index.html'
              })
          }
      })
    }

});

function validEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function checkEmail(email) {
    return fetch(link).then(res => res.json()).then(users => {
        let isFound = users.some(user => user.email == email)
        return isFound
    })
}
backBtn.addEventListener("click", () => {
  window.location.href = 'index.html'
})
