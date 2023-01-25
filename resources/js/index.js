let counter = 0
let btnInc = document.getElementById('inc')
let btnRes = document.getElementById('res')
let btnDec = document.getElementById('dec')
let cont = document.getElementById('cont')


btnInc.addEventListener('click', () => {
    counter ++
    cont.innerHTML = counter
    cont.style.color = 'green';
})

btnRes.addEventListener('click', () => {
    counter = 0
    cont.innerHTML = counter
    cont.style.color = 'blue';
})

btnDec.addEventListener('click', () => {
    counter --
    cont.innerHTML = counter
    cont.style.color = 'red';
})