/*alert('Hello world')
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
mostrarRamon()*/
//var num = 1; // {1}
//num = 3; // {2}
var price = 1.5; // {3}
var myName = 'Packt'; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6}
var und; // {7}
console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar: ' + nullVar);
console.log('und: ' + und);
var num = 0; // {1}
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1; // {2}
num -= 2;
num *= 3;
num /= 2;
num %= 3;
console.log('num == 1 : ' + (num == 1)); // {3}
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));
console.log('true && false : ' + (true && false)); // {4}
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));