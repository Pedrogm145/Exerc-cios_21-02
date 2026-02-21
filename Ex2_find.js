const numeros = [2, 4, 6, 9, 12, 15];

let impar = numeros.find(numero => {
    return numero % 2 === 1;
});
console.log(impar);
