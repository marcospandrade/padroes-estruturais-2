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
