class Mensagem {
    #text;
    #autor;
    #date;

    constructor(text,autor){
        this.#text = text;
        this.#autor = autor;
        this.#date = new Date();
    }
    
    toJSON() {
        return {
            text: this.#text,
            autor: this.#autor,
            data: this.#date.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
        };
    }
}

module.exports = Mensagem;