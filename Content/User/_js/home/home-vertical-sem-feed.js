/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var CarrosselVertical_1 = __webpack_require__(2);
	(function (global) {
	    var ui = {
	        carrossel: null,
	        inicializar: function () {
	            ui.carrossel = new CarrosselVertical_1.default("#carrossel-vertical", {});
	        }
	    };
	    document.addEventListener("DOMContentLoaded", ui.inicializar, false);
	}(window));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DOMHelper_1 = __webpack_require__(3);
	var ClassyHelper_1 = __webpack_require__(4);
	function define(from, to) {
	    if (to === void 0) { to = {}; }
	    for (var property in from) {
	        if (from.hasOwnProperty(property) && to[property] === undefined) {
	            to[property] = from[property];
	        }
	    }
	    return to;
	}
	var CarrosselVertical = (function () {
	    function CarrosselVertical(container, opcoes) {
	        this.classyAtiva = "carrossel-item-active";
	        this.classyAtivaPonto = "carrossel-dot-active";
	        this.posicaoAtual = 0;
	        // Obter todos os elementos usados no componente
	        this.container = DOMHelper_1.default.elemento(container);
	        this.containerItems = DOMHelper_1.default.obterElemento(opcoes.seletorContainerItems, this.container);
	        this.items = DOMHelper_1.default.obterElementos(opcoes.seletorItems, this.containerItems);
	        this.pontos = DOMHelper_1.default.obterElementos(opcoes.seletorPontos);
	        this.btnProximo = DOMHelper_1.default.obterElemento(opcoes.seletorBtnProximo);
	        this.btnAnterior = DOMHelper_1.default.obterElemento(opcoes.seletorBtnAnterior);
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
	    CarrosselVertical.prototype.proximo = function () {
	        var posicao = (this.posicaoAtual > this.items.length) ? 0 : this.posicaoAtual + 1;
	        this.paraItem(posicao);
	    };
	    CarrosselVertical.prototype.anterior = function () {
	        var posicao = (this.posicaoAtual === 0) ? this.items.length - 1 : this.posicaoAtual - 1;
	        this.paraItem(posicao);
	    };
	    CarrosselVertical.prototype.paraItem = function (posicao) {
	        if (posicao > (this.items.length - 1) || (posicao < 0))
	            throw new Error("Não é possível alterar para o item na posição!");
	        this.posicaoAtual = posicao;
	        // Aqui é onde acontece a mágica!
	        var translateY = -(posicao * this.altura);
	        this.containerItems.style.transform = "translateY(" + translateY + "px)";
	        ClassyHelper_1.default.removerTodosMenosEsse(this.items, this.items[this.posicaoAtual], this.classyAtiva);
	        ClassyHelper_1.default.removerTodosMenosEsse(this.pontos, this.pontos[this.posicaoAtual], this.classyAtivaPonto);
	    };
	    CarrosselVertical.prototype.addEvents = function () {
	        var _this = this;
	        function pararEvento(evento, pararAcaoPadrao, pararPropagacao) {
	            if (pararAcaoPadrao === void 0) { pararAcaoPadrao = true; }
	            if (pararPropagacao === void 0) { pararPropagacao = true; }
	            if (pararAcaoPadrao)
	                evento.preventDefault();
	            if (pararPropagacao)
	                evento.stopPropagation();
	        }
	        this.btnProximo.addEventListener("click", function (evento) {
	            _this.proximo();
	            pararEvento(evento);
	        });
	        this.btnAnterior.addEventListener("click", function (evento) {
	            _this.anterior();
	            pararEvento(evento);
	        });
	        this.pontos.forEach(function (ponto) {
	            ponto.addEventListener("click", function (evento) {
	                var posicao = parseInt(ponto.getAttribute("data-id-reference")) || 0;
	                _this.paraItem(posicao);
	                pararEvento(evento);
	            });
	        });
	    };
	    return CarrosselVertical;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CarrosselVertical;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var DOMHelper;
	(function (DOMHelper) {
	    function elemento(seletorOuElemento) {
	        return (typeof seletorOuElemento === "string") ? DOMHelper.obterElemento(seletorOuElemento) : seletorOuElemento;
	    }
	    DOMHelper.elemento = elemento;
	    function obterElemento(seletor, pai) {
	        if (pai === void 0) { pai = null; }
	        var elemento = (pai === null) ? document.querySelector(seletor) : pai.querySelector(seletor);
	        if (elemento instanceof HTMLElement) {
	            return elemento;
	        }
	        else {
	            throw new Error("O seletor \"" + seletor + "\" n\u00E3o retornou um HTMLElement.");
	        }
	    }
	    DOMHelper.obterElemento = obterElemento;
	    function obterElementos(seletor, pai) {
	        if (pai === void 0) { pai = null; }
	        var elementos = (pai === null) ? document.querySelectorAll(seletor) : pai.querySelectorAll(seletor);
	        if (elementos.length === 0)
	            throw new Error("O seletor \"" + seletor + "\" n\u00E3o retornou elementos.");
	        return DOMHelper.converterParaArray(elementos);
	    }
	    DOMHelper.obterElementos = obterElementos;
	    function converterParaArray(nodelist) {
	        var elementos = [];
	        for (var i = 0, l = nodelist.length; i < l; i++) {
	            var elemento_1 = nodelist[i];
	            if (elemento_1 instanceof HTMLElement)
	                elementos.push(elemento_1);
	        }
	        return elementos;
	    }
	    DOMHelper.converterParaArray = converterParaArray;
	})(DOMHelper || (DOMHelper = {}));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DOMHelper;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var ClassyHelper;
	(function (ClassyHelper) {
	    function removerTodosMenosEsse(todos, esse, classy) {
	        todos.forEach(function (elemento) { return elemento.classList.remove(classy); });
	        esse.classList.add(classy);
	    }
	    ClassyHelper.removerTodosMenosEsse = removerTodosMenosEsse;
	})(ClassyHelper || (ClassyHelper = {}));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ClassyHelper;


/***/ }
/******/ ]);