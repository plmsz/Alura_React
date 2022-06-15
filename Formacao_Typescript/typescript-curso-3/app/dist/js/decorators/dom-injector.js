export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`modificando prototype: ${target.constructor.name} e adicionando getter a propriedade: ${propertyKey}`);
        const getter = function () {
            const elemento = document.querySelector(seletor);
            console.log(`buscando elemento do do seletor ${seletor} para injetar em ${propertyKey}`);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
