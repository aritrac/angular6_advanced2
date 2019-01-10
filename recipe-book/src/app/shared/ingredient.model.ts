export class Ingredient {
    // Method 1
    // public name: string;
    // public amount: number;

    // constructor(name: string, amount: number) {
    //     this.name = name;
    //     this.amount = amount;
    // }

    // Method 2 a shortcut to do the same thing as the section commented above
    constructor(public name: string, public amount: number) {}
}
