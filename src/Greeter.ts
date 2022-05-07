import { delay } from './decorators/delay';

class Greeter {
    greeting: string;

    constructor(g: string) {
        this.greeting = g;
    }

    @delay(2000)
    greet() {
        console.log('Hello ' + this.greeting);
    }
}

const pessoa = new Greeter('Pessoa');
pessoa.greet();
