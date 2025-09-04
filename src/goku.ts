interface SaiyanState {
  readonly name: string;
  powerUp(ctx: Goku): void; // subir de fase (si se puede)
  powerDown(ctx: Goku): void; // bajar de fase (si se puede)
  fase(ctx: Goku): void; // mostrar fase actual
}

/** === Contexto === */
class Goku {
  private state: SaiyanState;

  constructor() {
    this.state = new BaseState();
  }

  // Métodos que delegan en el estado actual
  powerUp() {
    this.state.powerUp(this);
  }
  powerDown() {
    this.state.powerDown(this);
  }
  fase() {
    this.state.fase(this);
  }

  // Cambio de estado
  setState(s: SaiyanState) {
    console.log(
      `[Goku/${this.state.name}] Transición: ${this.state.name} → ${s.name}`
    );
    this.state = s;
  }
}

/** === Estados === */

class BaseState implements SaiyanState {
  get name() {
    return "Base";
  }

  powerUp(ctx: Goku): void {
    ctx.setState(new SSJ1State());
  }

  powerDown(ctx: Goku): void {
    console.log("[Goku/Base] Ya está en su forma mínima.");
  }
  fase(ctx: Goku): void {
    console.log("Forma actual: Base");
  }
}

class SSJ1State implements SaiyanState {
  get name() {
    return "Super Saiyajin 1";
  }

  powerUp(ctx: Goku): void {
    ctx.setState(new SSJ2State());
  }

  powerDown(ctx: Goku): void {
    ctx.setState(new BaseState());
    console.log("[Goku/SSJ1] Baja a forma base.");
  }
  fase(ctx: Goku): void {
    console.log("Forma actual: SSJ1");
  }
}

class SSJ2State implements SaiyanState {
  get name() {
    return "Super Saiyajin 2";
  }

  powerUp(ctx: Goku): void {
    console.log("[Goku/SSJ2] Ya está al máximo.");
  }

  powerDown(ctx: Goku): void {
    ctx.setState(new SSJ1State());
    console.log("[Goku/SSJ2] Desciende a SSJ1.");
  }
  fase(ctx: Goku): void {
    console.log("Forma actual: SSJ2");
  }
}

/** === Prueba === */
if (require.main === module) {
  const goku = new Goku();
  const prompt = require("prompt-sync")();
  let cond = true;
  while (cond) {
    console.log("=========================");
    console.log("1. Subir de fase");
    console.log("2. Bajar de fase");
    console.log("3. Mostrar fase actual");
    console.log("4. Salir");
    console.log("=========================");
    const opcion = prompt("Ingrese una opción: ");
    switch (opcion) {
      case "1":
        console.clear();
        goku.powerUp();
        break;
      case "2":
        console.clear();
        goku.powerDown();
        break;
      case "3":
        console.clear();
        goku.fase();
        break;
      case "4":
        cond = false;
        break;
      default:
        console.clear();
        console.log("Opción inválida");
    }
  }
}
