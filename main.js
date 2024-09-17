let link = "https://66e7e69cb17821a9d9da6ec1.mockapi.io/logIn";
let welcomeName = document.getElementById('welcomeName')
let userName = localStorage.getItem('userName') 
let profileLink = document.getElementById('profile-link')
let essayLink = document.getElementById('essay-link')
let homeLink = document.getElementById('home-link')
let container = document.getElementsByClassName('cards-div')[0]
let loginBtn = document.getElementById('loginPage')
let signupBtn = document.getElementById('signupPage')
let logoutBtn = document.getElementById('logoutBtn')
let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')
let warningProfile = document.getElementById('warning-profile')

console.log(userName);

if (!userName) {
    logoutBtn.classList.add('none')
    welcomeName.classList.add('none')
    container.classList.add('none')
    text2.classList.add('none')
} else {
    loginBtn.classList.add('none')
    text1.classList.add('none')
    signupBtn.classList.add('none')

    welcomeName.textContent = `${userName}`

    
}
profileLink.addEventListener('click', () => {
    if (!userName) {
        warningProfile.classList.remove('none')
    } else {
        window.location.href = 'profile.html'
    }
})

essayLink.addEventListener('click', () => {
    window.location.href = 'essay.html'
})
homeLink.addEventListener('click', () => {
    window.location.href = 'index.html'
})
loginBtn.addEventListener('click', () => {
    window.location.href = 'login.html'
})
signupBtn.addEventListener('click', () => {
    window.location.href = 'signup.html'
})
logoutBtn.addEventListener('click', () => {
    window.location.href = 'index.html'
    localStorage.removeItem('userName');
})

fetch(link).then(res => res.json()).then(data => {
    let essays;
        console.log(data);
        
    data.map(item => {
            
        if (item.title != null) {
            if (item.name != null && item.name == userName) {
                
                console.log(item);
                
            let card = document.createElement('div')
                card.classList.add('card')
              
                let textBox = document.createElement('div')
                textBox.classList.add('textBox')
                let title = document.createElement('h5')
                title.classList.add('title')
            let img = document.createElement('img')
                let essay = document.createElement('p')
                essay.classList.add('essay')
            title.textContent = item.title
            img.src = item.img
            essay.textContent = item.essay
                textBox.appendChild(title)
                textBox.appendChild(essay)
                card.appendChild(img)
                card.appendChild(textBox)
                container.appendChild(card)
        }
            }
    })
    
})