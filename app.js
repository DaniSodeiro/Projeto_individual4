// Importa o módulo readline-sync para interagir com o usuário via linha de comando
import readline from "readline-sync";

class PropriedadesCSS {
    constructor() {
        this.propriedades = [];
    }

    coletarPropriedades() {
        let entrada = readline.question(
            "Digite uma propriedade de CSS (ou 'SAIR' para encerrar): "
        ).toUpperCase();

        // Verifica se o usuário digitou algo que não seja vazio
        if (entrada.trim() === "") {
            console.log("Por favor, digite uma propriedade válida.");
            this.coletarPropriedades(); // Chama a função novamente para obter uma entrada válida
        } else if (entrada === "SAIR") {
            this.exibirPropriedadesOrdenadas();
        } else {
            this.propriedades.push(entrada);
            this.coletarPropriedades();
        }
    }

    exibirPropriedadesOrdenadas() {
        this.propriedades.sort().forEach((propriedade) => {
            console.log(propriedade);
        });
    }
}

const propriedadesCSS = new PropriedadesCSS();
propriedadesCSS.coletarPropriedades();
