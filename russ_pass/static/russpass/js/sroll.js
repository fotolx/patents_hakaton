const anchors = document.querySelectorAll('.scroll__display')

for(let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    })
}