function enumerable(newValue: boolean) {
    return (
        target: any,
        propertyKey: string,
        propertyDescriptor: PropertyDescriptor
    ) => {
        propertyDescriptor.enumerable = newValue;
    };
}

function log() {
    console.log('Log');
}

class User {
    name: string = 'Marcos';

    @enumerable(true)
    changePassword(newPassword: string) {}
}

const user = new User();

console.log(user);
for (const key in user) {
    console.log(key);
}

function logProperty(target: any, key: string) {
    const newKey = `_${key}`;

    Object.defineProperty(target, key, {
        get() {
            console.log(`Get: ${key} => ${this[newKey]}`);
            return this[newKey];
        },
        set(newVal) {
            console.log(`Set: ${key} => ${newVal}`);
            this[newKey] = newVal;
        },
        enumerable: true,
        configurable: true
    });
}

class Task {
    @logProperty
    public id: number;

    @logProperty
    public title: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
}

const task = new Task(1, 'Write more articles');

console.log(task.id, task.title);
