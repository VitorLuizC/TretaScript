namespace ClassyHelper {
    export function removerTodosMenosEsse(todos: Array<HTMLElement>, esse: HTMLElement, classy: string): void {
        todos.forEach(elemento => elemento.classList.remove(classy));
        esse.classList.add(classy);
    }
}

export default ClassyHelper;
