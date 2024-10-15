// Classe Pilha
class Pilha {
  constructor() {
    this.itens = [];
  }

  // Empilhar (push)
  empilhar(elemento) {
    this.itens.push(elemento);
  }

  // Desempilhar (pop)
  desempilhar() {
    if (this.isVazia()) {
      return null;
    }
    return this.itens.pop();
  }

  // Ver topo da pilha
  topo() {
    if (this.isVazia()) {
      return null;
    }
    return this.itens[this.itens.length - 1];
  }

  // Verificar se a pilha está vazia
  isVazia() {
    return this.itens.length === 0;
  }

  // Mostrar pilha
  mostrar() {
    console.log(this.itens.toString());
  }
}

// Função recursiva para resolver o problema da Torre de Hanoi
function moverDiscos(n, origem, destino, auxiliar) {
  if (n === 1) {
    // Mover o disco de origem para destino
    destino.empilhar(origem.desempilhar());
    console.log(`Move disco ${n} de P${origem.nome} para P${destino.nome}`);
  } else {
    // Passo recursivo: mover n-1 discos para a pilha auxiliar
    moverDiscos(n - 1, origem, auxiliar, destino);
    // Mover o último disco diretamente para a pilha destino
    destino.empilhar(origem.desempilhar());
    console.log(`Move disco ${n} de P${origem.nome} para P${destino.nome}`);
    // Mover os discos da auxiliar para a pilha destino
    moverDiscos(n - 1, auxiliar, destino, origem);
  }
}

// Instanciar as pilhas P1, P2, P3
let P1 = new Pilha();
P1.nome = 1; // Nome da pilha para facilitar identificação
let P2 = new Pilha();
P2.nome = 2;
let P3 = new Pilha();
P3.nome = 3;

// Carregar a pilha P1 com os discos 3, 2, 1 (grande, médio, pequeno)
P1.empilhar(3);
P1.empilhar(2);
P1.empilhar(1);

console.log('Estado inicial das pilhas:');
console.log('P1: ');
P1.mostrar();
console.log('P2: ');
P2.mostrar();
console.log('P3: ');
P3.mostrar();

// Resolver o problema movendo os discos de P1 para P3
moverDiscos(3, P1, P3, P2);

console.log('Estado final das pilhas:');
console.log('P1: ');
P1.mostrar();
console.log('P2: ');
P2.mostrar();
console.log('P3: ');
P3.mostrar();
