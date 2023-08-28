// Importa o módulo readline-sync para interagir com o usuário via linha de comando
import readline from "readline-sync";

// Cria um array chamado propriedades para armazenar as propriedades de CSS
const propriedades = [];

// Função propriedadesPrompt que irá coletar as propriedades de CSS
function propriedadesPrompt() {
    // Pede ao usuário que digite uma propriedade de CSS ou "SAIR" para encerrar
    let entrada = readline.question("Digite uma propriedade de CSS (ou 'SAIR' para encerrar): ").toUpperCase();

    // Verifica se o usuário digitou "SAIR"
    if (entrada === "SAIR") {
        // Se sim, ordena e exibe as propriedades digitadas
        propriedades.sort().forEach((propriedade) => {
            console.log(propriedade);
        });
    } else {
        // Se não, adiciona a propriedade ao array propriedades e chama a função novamente
        propriedades.push(entrada);
        propriedadesPrompt();
    }
}

// Chama a função propriedadesPrompt para começar a coletar as propriedades
propriedadesPrompt();

