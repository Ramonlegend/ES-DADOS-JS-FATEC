alert('Hello world')
num1 = 5
num2 = 10
console.log(num1 + num2)
oi = 'caio'
po = 'sapo cego'
console.log(oi + po)
const btn = document.getElementById('oi')
const back = document.getElementById('ramongod')
const mostrarRamon = () => {
    back.insertAdjacentHTML ('beforeend', '<h1>Ramon é Godinho</h1>'); //adiciona este elemento ao final do back, fazendo com que os demais elementos permaneçam intactos
}
btn.addEventListener('click', () => {
    back.style.backgroundColor = 'red'
})
mostrarRamon()