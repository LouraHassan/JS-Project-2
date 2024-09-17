let link = "https://66e7e69cb17821a9d9da6ec1.mockapi.io/logIn";
let welcomeName = document.getElementById('welcomeName')
let userName = localStorage.getItem('userName') 
let profileLink = document.getElementById('profile-link')
let essayLink = document.getElementById('essay-link')
let homeLink = document.getElementById('home-link')
let loginBtn = document.getElementById('loginPage')
let signupBtn = document.getElementById('signupPage')
let logoutBtn = document.getElementById('logoutBtn')
let title = document.getElementById('title')
let img = document.getElementById('img')
let essay = document.getElementById('essay')
let essayBtn = document.getElementById('AddEssay')
let warningTitle = document.getElementById('warning-title')
let warningImg = document.getElementById('warning-img')
let warningEssay = document.getElementById('warning-essay')
let warningAll = document.getElementById('warning-all')
let warningProfile = document.getElementById('warning-profile')
let warningProfile2 = document.getElementById('warning-profile2')
let essayText = document.getElementById('essay-text')
console.log(userName);

if (!userName) {
    welcomeName.textContent = `Welcome`
    logoutBtn.classList.add('none')
} else {
    loginBtn.classList.add('none')
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
homeLink.addEventListener('click', () => {
    window.location.href = 'index.html'
})
essayLink.addEventListener('click', () => {
   
        window.location.href = 'essay.html'
    
})

loginBtn.addEventListener('click', () => {
    window.location.href = 'login.html'
})
signupBtn.addEventListener('click', () => {
    window.location.href = 'signup.html'
})
logoutBtn.addEventListener('click', () => {
    window.location.href = 'essay.html'
    localStorage.removeItem('userName');
})

essayBtn.addEventListener('click', () => {
    if (!userName) {
        warningProfile2.classList.remove('none')
    } else {
        if (title.value == '' || img.value == '' || essay.value == '') {
            title.classList.add('redBorder')
            img.classList.add('redBorder')

            essay.classList.add('redBorder')
warningAll.classList.remove('none')
            warningAll.textContent = 'You must fill the fields'
            console.log(warningAll.textContent);
            
        } else {
            title.classList.remove('redBorder')
            img.classList.remove('redBorder')

            essay.classList.remove('redBorder')
warningAll.classList.add('none')
            fetch(link, {
                method: 'POST',
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                    name: userName,
                    title: title.value,
                    img: img.value,
                    essay: essay.value,
                })
            }).then(res => res.json()).then(data => {
                console.log('essay sent!');
                essayText.classList.remove('none')
            })
        }
    }
})
