export function minLength(length: number) {
    return (target: any, key: string) => {
        let val = target[key];

        const getter = () => val;

        const setter = (value: string) => {
            if (value.length < length) {
                console.log(
                    `Error: Você não pode criar ${key} com tamanho menor que ${length}.`
                );
            } else {
                val = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
