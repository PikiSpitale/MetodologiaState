/** === Contexto === */
var Goku = /** @class */ (function () {
    function Goku() {
        this.state = new BaseState();
    }
    // Métodos que delegan en el estado actual
    Goku.prototype.powerUp = function () {
        this.state.powerUp(this);
    };
    Goku.prototype.powerDown = function () {
        this.state.powerDown(this);
    };
    Goku.prototype.fase = function () {
        this.state.fase(this);
    };
    // Cambio de estado
    Goku.prototype.setState = function (s) {
        console.log("[Goku/".concat(this.state.name, "] Transici\u00F3n: ").concat(this.state.name, " \u2192 ").concat(s.name));
        this.state = s;
    };
    return Goku;
}());
/** === Estados === */
var BaseState = /** @class */ (function () {
    function BaseState() {
    }
    Object.defineProperty(BaseState.prototype, "name", {
        get: function () {
            return "Base";
        },
        enumerable: false,
        configurable: true
    });
    BaseState.prototype.powerUp = function (ctx) {
        ctx.setState(new SSJ1State());
    };
    BaseState.prototype.powerDown = function (ctx) {
        console.log("[Goku/Base] Ya está en su forma mínima.");
    };
    BaseState.prototype.fase = function (ctx) {
        console.log("Forma actual: Base");
    };
    return BaseState;
}());
var SSJ1State = /** @class */ (function () {
    function SSJ1State() {
    }
    Object.defineProperty(SSJ1State.prototype, "name", {
        get: function () {
            return "Super Saiyajin 1";
        },
        enumerable: false,
        configurable: true
    });
    SSJ1State.prototype.powerUp = function (ctx) {
        ctx.setState(new SSJ2State());
    };
    SSJ1State.prototype.powerDown = function (ctx) {
        ctx.setState(new BaseState());
        console.log("[Goku/SSJ1] Baja a forma base.");
    };
    SSJ1State.prototype.fase = function (ctx) {
        console.log("Forma actual: SSJ1");
    };
    return SSJ1State;
}());
var SSJ2State = /** @class */ (function () {
    function SSJ2State() {
    }
    Object.defineProperty(SSJ2State.prototype, "name", {
        get: function () {
            return "Super Saiyajin 2";
        },
        enumerable: false,
        configurable: true
    });
    SSJ2State.prototype.powerUp = function (ctx) {
        console.log("[Goku/SSJ2] Ya está al máximo.");
    };
    SSJ2State.prototype.powerDown = function (ctx) {
        ctx.setState(new SSJ1State());
        console.log("[Goku/SSJ2] Desciende a SSJ1.");
    };
    SSJ2State.prototype.fase = function (ctx) {
        console.log("Forma actual: SSJ2");
    };
    return SSJ2State;
}());
/** === Prueba === */
if (require.main === module) {
    var goku = new Goku();
    var prompt_1 = require("prompt-sync")();
    var cond = true;
    while (cond) {
        console.log("=========================");
        console.log("1. Subir de fase");
        console.log("2. Bajar de fase");
        console.log("3. Mostrar fase actual");
        console.log("4. Salir");
        console.log("=========================");
        var opcion = prompt_1("Ingrese una opción: ");
        switch (opcion) {
            case "1":
                goku.powerUp();
                break;
            case "2":
                goku.powerDown();
                break;
            case "3":
                goku.fase();
                break;
            case "4":
                cond = false;
                break;
            default:
                console.log("Opción inválida");
        }
    }
}
