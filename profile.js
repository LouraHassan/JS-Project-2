let link = "https://66e7e69cb17821a9d9da6ec1.mockapi.io/logIn";
let userName = localStorage.getItem('userName') 
let profileLink = document.getElementById('profile-link')
let essayLink = document.getElementById('essay-link')
let homeLink = document.getElementById('home-link')
let logoutBtn = document.getElementById('logoutBtn')
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')


essayLink.addEventListener('click', () => {
    window.location.href = 'essay.html'
})
homeLink.addEventListener('click', () => {
    window.location.href = 'index.html'
})

logoutBtn.addEventListener('click', () => {
    window.location.href = 'index.html'
    localStorage.removeItem('userName');
})
console.log(userName);

fetch(link).then(res => res.json()).then(users => {
    let user = users.find(user => user.firstName == userName)
    console.log(user);
    
    fname.textContent = user.firstName
    lname.textContent = user.lastName
    email.textContent = user.email
})

