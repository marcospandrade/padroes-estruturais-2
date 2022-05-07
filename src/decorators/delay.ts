// Method decorator

export function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`Delay ${ms}ms...`);
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);
        };
    };
}
