// Importa o módulo readline-sync para interagir com o usuário via linha de comando
import readline from "readline-sync";

// Classe para coletar e exibir propriedades CSS
class PropriedadesCSS {
    constructor() {
        this.propriedades = [];
    }

    // Método para coletar propriedades
    coletarPropriedades() {
        while (true) {
            // Obtém a entrada do usuário
            let entrada = this.obterEntrada();
            
            // Verifica se o usuário deseja sair
            if (entrada === "SAIR") {
                // Exibe as propriedades ordenadas e encerra
                this.exibirPropriedadesOrdenadas();
                break;
            }
            
            // Adiciona a propriedade à lista
            this.propriedades.push(entrada);
        }
    }
    
    // Método para obter entrada do usuário
    obterEntrada() {
        const entrada = readline.question(
            "Digite uma propriedade de CSS (ou 'SAIR' para encerrar): "
        ).toUpperCase();
        
        // Verifica se o usuário digitou algo que não seja vazio
        if (entrada.trim() === "") {
            console.log("Por favor, digite uma propriedade válida.");
            // Chama a função novamente para obter uma entrada válida
            return this.obterEntrada();
        }
        
        return entrada;
    }

    // Método para exibir propriedades ordenadas
    exibirPropriedadesOrdenadas() {
        if (this.propriedades.length === 0) {
            console.log("Nenhuma propriedade foi inserida.");
        } else {
            console.log("Propriedades ordenadas:");
            // Ordena e exibe as propriedades
            this.propriedades.sort().forEach((propriedade) => {
                console.log(propriedade);
            });
        }
    }
}

// Cria uma instância da classe PropriedadesCSS
const propriedadesCSS = new PropriedadesCSS();

// Inicia o processo de coletar propriedades
propriedadesCSS.coletarPropriedades();
