namespace DOMHelper {
    export function elemento(seletorOuElemento: string | HTMLElement): HTMLElement {
        return (typeof seletorOuElemento === "string") ? DOMHelper.obterElemento(seletorOuElemento) : seletorOuElemento;
    }

    export function obterElemento(seletor: string, pai: HTMLElement | null = null): HTMLElement {
        var elemento: Element = (pai === null) ? document.querySelector(seletor) : pai.querySelector(seletor);
 
        if (elemento instanceof HTMLElement) {
            return elemento;
        } else {
            throw new Error(`O seletor "${seletor}" não retornou um HTMLElement.`);
        }
    }
    export function obterElementos(seletor: string, pai: HTMLElement | null = null): Array<HTMLElement> {
        var elementos: NodeList = (pai === null) ? document.querySelectorAll(seletor) : pai.querySelectorAll(seletor);

        if (elementos.length === 0) throw new Error(`O seletor "${seletor}" não retornou elementos.`);

        return DOMHelper.converterParaArray(elementos);
    }

    export function converterParaArray(nodelist: NodeList): Array<HTMLElement> {
        var elementos: Array<HTMLElement> = [];

        for (let i = 0, l = nodelist.length; i < l; i++) {
            let elemento: Node = nodelist[i];

            if (elemento instanceof HTMLElement) elementos.push(elemento);
        }

        return elementos;
    }
}

export default DOMHelper;
