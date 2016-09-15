interface ICarrossel {
    container: Element;
    items: Array<Object>;
    proximo(): void;
    anterior(): void;
    paraItem(posicao: number): void;
}

export default ICarrossel;
