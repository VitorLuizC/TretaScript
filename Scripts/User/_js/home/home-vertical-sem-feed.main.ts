import CarrosselVertical from "../../../Componentes/Carrossel/CarrosselVertical";

(function (global) {
    var ui = {
        carrossel: null,

        inicializar: function (): void {
            ui.carrossel = new CarrosselVertical("#carrossel-vertical", {});
        }
    };

    document.addEventListener("DOMContentLoaded", ui.inicializar, false);

} (window));
