// Ainda não funcional, vou atualizar no repositório

export function queryValidate(
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<string>
) {
    console.log('target', target);
    console.log('key', propertyKey);
    console.log('descriptor', descriptor);
    const newKey = `_${propertyKey}`;

    Object.defineProperty(target, propertyKey, {
        set(newVal) {
            console.log(`Set: ${propertyKey} => ${newVal}`);
            this[newKey] = newVal;
        },
        enumerable: true
    });
}
