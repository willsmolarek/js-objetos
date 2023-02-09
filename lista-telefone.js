const cliente = {
    nome:"André",
    idade: 36,
    cpf: "11111111111",
    email:"andre@email.com",
    fones:["55912345498","5521988743124"]
}

cliente.fones.forEach(fone => console.log(fone))

console.log(cliente.fones[0])
console.log(cliente.fones[1])
console.log(cliente.fones)