import { minLength } from './decorators/minLength';

class Movie {
    @minLength(5)
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

const movie = new Movie('Avengers');
console.log(movie);
