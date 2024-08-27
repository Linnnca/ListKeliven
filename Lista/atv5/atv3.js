let chave1 = Symbol();
let usuario = {
    nome: 'João da Silva',
    idade: 30,
    [chave1]: 'informação confidencial'
};

console.log(usuario);
console.log(usuario[chave1]);