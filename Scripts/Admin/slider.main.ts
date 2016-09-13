import DOM from "../Helpers/DOM";

function main(e: Event): void {
    var slider = DOM.getElement("#slider");
    slider.classList.add("slider-admin");
}

$(window).on("load", main);
