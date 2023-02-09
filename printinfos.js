const cliente = {
    nome:"André",
    idade: 36,
    cpf: "11111111111",
    email:"andre@email.com"
};

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`);

console.log(cliente.cpf.substring(0, 3))