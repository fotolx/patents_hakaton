const accountBody = document.querySelector('.date-account-body')
const btnOpen = document.querySelector('.nav-country__img--open')
const bodyBg = document.querySelector('.body-bg')
const btnClose = document.querySelector('.nav-country__img--close')

btnOpen.addEventListener('click', ()=> {
    accountBody.classList.add('date-account-body--active')
    btnOpen.classList.add('open-body--active')
    bodyBg.classList.add('body-bg--active')
    document.querySelector('.nav-country__img--open').style.display = 'none'
    btnClose.style.display = 'block'
});

btnClose.addEventListener('click', ()=> {
    accountBody.classList.remove('date-account-body--active')
    btnOpen.classList.remove('open-body--active')
    bodyBg.classList.remove('body-bg--active')
    document.querySelector('.nav-country__img--open').style.display = 'block'
    btnClose.style.display = 'none'
})
