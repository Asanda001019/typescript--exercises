

class Calculator {
  add(x: number, y: number): number {
    this.validateInputs(x, y);
    return x + y;
  }

  minus(x: number, y: number): number {
    this.validateInputs(x, y);
    return x - y;
  }

  divide(x: number, y: number): number {
    this.validateInputs(x, y);
    if (y === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return x / y;
  }

  multiply(x: number, y: number): number {
    this.validateInputs(x, y);
    return x * y;
  }

  private validateInputs(x: any, y: any): void {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Inputs must be numbers!");
    }
  }
}