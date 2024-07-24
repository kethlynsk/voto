const prompt = require("prompt-sync")();

const votos = [];

const votar = () => {
    let voto = +prompt(`ESCOLHA EM QUEM VOTAR:
    CANDIDATO 1 = 1
    CANDIDATO 2 = 2
    CANDIDATO 3 = 3
    CANDIDATO 4 = 4
    
    `)
    
    votos.push(voto);

    console.log("Voto confirmado");
};

const listar = () => {
    votos.forEach((votos, indice) => {
    console.log(`${indice + 1}. ${votos}`);
    });
};


const atualizar = () => {
    listar();

    let indice = prompt("Qual indice deseja atualizar? ");
    let atualizado = prompt("Qual o novo voto? ")
    
    votos[--indice] = atualizado;

    console.log("Atualizado");
};

const remover = () => {
    listar();

    let indice = prompt("Qual indice sera removido? ");

    votos.splice(--indice, 1);

    console.log("Removido");
}




module.exports = {
    votar,
    listar,
    remover,
    atualizar
};