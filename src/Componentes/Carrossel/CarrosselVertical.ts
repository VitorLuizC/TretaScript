import ICarrossel from "./ICarrossel";
import CarrosselVerticalOpcoes from "./CarrosselVerticalOpcoes";
import DOMHelper from "../../Helpers/DOMHelper";
import ClassyHelper from "../../Helpers/ClassyHelper";

function define(from: Object, to: Object = {}): Object {
    for (let property in from) {
        if (from.hasOwnProperty(property) && to[property] === undefined) {
            to[property] = from[property];
        }
    }

    return to;
}

class CarrosselVertical implements ICarrossel {
    container: HTMLElement;
    containerItems: HTMLElement;
    items: Array<HTMLElement>;
    pontos: Array<HTMLElement>;
    btnProximo: HTMLElement;
    btnAnterior: HTMLElement;
    opcoes: CarrosselVerticalOpcoes;
    altura: number;
    classyAtiva: string = "carrossel-item-active";
    classyAtivaPonto: string = "carrossel-dot-active";
    posicaoAtual: number = 0;

    constructor(container: string | HTMLElement, opcoes: CarrosselVerticalOpcoes) {
        // Obter todos os elementos usados no componente
        this.container = DOMHelper.elemento(container);
        this.containerItems = DOMHelper.obterElemento(opcoes.seletorContainerItems, this.container);
        this.items = DOMHelper.obterElementos(opcoes.seletorItems, this.containerItems);
        this.pontos = DOMHelper.obterElementos(opcoes.seletorPontos);
        this.btnProximo = DOMHelper.obterElemento(opcoes.seletorBtnProximo);
        this.btnAnterior = DOMHelper.obterElemento(opcoes.seletorBtnAnterior);

        // Aplicar outras opções
        this.opcoes = {
            altura: 414,
            classyAtiva: "carrossel-item-active",
            classyAtivaPonto: "carrossel-dot-active",
            posicaoInicial: 0,
            seletorContainerItems: ".carrossel-itens",
            seletorItems: ".carrossel-item",
            seletorPontos: ".carrossel-dot",
            seletorBtnProximo: ".carrossel-arrow-next",
            seletorBtnAnterior: ".carrossel-arrow-prev"
        };
        define(opcoes, this.opcoes);

        this.altura = opcoes.altura;
        this.classyAtiva = opcoes.classyAtiva;
        this.classyAtivaPonto = opcoes.classyAtivaPonto;

        // Iniciar o Carrossel
        this.paraItem(opcoes.posicaoInicial);
        this.addEvents();
    }

    proximo(): void {
        var posicao: number = (this.posicaoAtual > this.items.length) ? 0 : this.posicaoAtual + 1;

        this.paraItem(posicao);
    }

    anterior(): void {
        var posicao: number = (this.posicaoAtual === 0) ? this.items.length - 1 : this.posicaoAtual - 1;

        this.paraItem(posicao);
    }

    paraItem(posicao: number) {
        if (posicao > (this.items.length - 1) || (posicao < 0)) throw new Error("Não é possível alterar para o item na posição!");

        this.posicaoAtual = posicao;

        // Aqui é onde acontece a mágica!
        var translateY: number = -(posicao * this.altura);
        this.containerItems.style.transform = `translateY(${translateY}px)`;

        ClassyHelper.removerTodosMenosEsse(this.items, this.items[this.posicaoAtual], this.classyAtiva);
        ClassyHelper.removerTodosMenosEsse(this.pontos, this.pontos[this.posicaoAtual], this.classyAtivaPonto);
    }

    addEvents(): void {
        function pararEvento(evento: Event, pararAcaoPadrao: boolean = true, pararPropagacao: boolean = true): void {
            if (pararAcaoPadrao) evento.preventDefault();
            if (pararPropagacao) evento.stopPropagation();
        }

        this.btnProximo.addEventListener("click", (evento: Event) => {
            this.proximo();
            pararEvento(evento);
        });

        this.btnAnterior.addEventListener("click", (evento: Event) => {
            this.anterior();
            pararEvento(evento);
        });

        this.pontos.forEach(ponto => {
            ponto.addEventListener("click", (evento: Event) => {
                var posicao: number = parseInt(ponto.getAttribute("data-id-reference")) || 0;
                this.paraItem(posicao);
                pararEvento(evento);
            });
        });
    }
}

export default CarrosselVertical;
