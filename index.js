const prompt = require("prompt-sync")();
const { votar, atualizar, remover, listar } = require("./atividades.js");

while (true) {
console.log(
    `O que deseja fazer?
    1 - Votar
    2 - Atualizar
    3 - Remover voto
    4 - Listar votos
    5- Sair`
);
let opcao = Number(prompt());

switch (opcao) {
    case 1:
    votar();
    break;

    case 2:
    atualizar();
    break;

    case 3:
    remover();
    break;

    case 4:
    listar();
    break;

    case 5:
    process.exit();
    break;

    default:
    console.log("Opção inválida");
    break;
    }
}