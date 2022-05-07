const userHasPermission = ['admin', 'root'];

export function queryValidate(typeUserLogged: string) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            if (userHasPermission.includes(typeUserLogged)) {
                originalMethod.apply(this, args);
            } else {
                console.log(
                    `Usuário ${typeUserLogged} não tem permissão para executar esta ação.`
                );
            }
        };
    };
}
