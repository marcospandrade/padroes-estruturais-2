import { queryValidate } from './decorators/queryValidate';

interface Usuario {
    name: string;
    age: number;
}

class UserRepository {
    userToAdd: Usuario = {} as Usuario;
    loggedUser: string;

    constructor(private typeUserLogged: string) {
        this.loggedUser = typeUserLogged;
    }

    @queryValidate('local')
    addUser(user: Usuario) {
        this.userToAdd = user;
        console.log(this.userToAdd);
    }
}

const usuario: Usuario = { name: 'João', age: 20 };

const userRepo = new UserRepository('Marcos');
userRepo.addUser(usuario);
