//Professor, baseado no livro do Groner, página 39, criamos códigos que exemplificam os conhecimentos adquiridos.

//1. Estrutura de Controle if()
let numero = 10;

if (numero > 0) {
  console.log('O número é positivo.');
} else if (numero < 0) {
  console.log('O número é negativo.');
} else {
  console.log('O número é zero.');
}

//2. Estrutura de Controle switch-case
let fruta = 'maçã';

switch (fruta) {
  case 'banana':
    console.log('Você escolheu uma banana.');
    break;
  case 'maçã':
    console.log('Você escolheu uma maçã.');
    break;
  case 'laranja':
    console.log('Você escolheu uma laranja.');
    break;
  default:
    console.log('Fruta desconhecida.');
}

//3. Estrutura de Repetição for()
for (let i = 0; i < 5; i++) {
  console.log('Contagem: ' + i);
}

//4. Estrutura de Repetição while()
let contador = 0;

while (contador < 5) {
  console.log('Contador: ' + contador);
  contador++;
}

//5. Estrutura de Repetição do-while()
let contador2 = 0;

do {
  console.log('Contador: ' + contador2);
  contador2++;
} while (contador2 < 5);

//6. Funções
function soma(a, b) {
  return a + b;
}

console.log('A soma é: ' + soma(5, 3));
