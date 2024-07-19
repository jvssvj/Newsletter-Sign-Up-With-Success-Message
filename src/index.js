const email = document.querySelector('#input--email')
const subscribing = document.querySelector('#subscribing')
const frm = document.querySelector('#frm')
let teste 

function error(inputId, backgroundColor, color, borderConfig, errorId, textContent) {
    document.getElementById(inputId).style.backgroundColor = backgroundColor
    document.getElementById(inputId).style.color = color
    document.getElementById(inputId).style.border = borderConfig
    document.getElementById(errorId).textContent = textContent
}

email.addEventListener('input', () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let emailValue = email.value

    if(emailPattern.test(emailValue)) {
        error('input--email', '', '', '', 'error', '')
        return
    } else {
        error('input--email', 'hsla(4, 100%, 67%, 0.288)', 'hsl(4, 100%, 67%)', '1px solid hsl(4, 100%, 67%)', 'error', 'Valid email required')
    }
})

frm.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let emailValue = email.value

    if(emailPattern.test(emailValue)) {
        document.querySelector('.newsletter__card').style.display = 'none'
        document.querySelector('.thanks__card').style.display = 'flex'
        document.querySelector('#user--email').textContent = emailValue
    } else {
        error('input--email', 'hsla(4, 100%, 67%, 0.288)', 'hsl(4, 100%, 67%)', '1px solid hsl(4, 100%, 67%)', 'error', 'Valid email required')
    }
})

document.querySelector('#dismiss--message').addEventListener('click', () => {
    window.location.href = 'index.html'
})