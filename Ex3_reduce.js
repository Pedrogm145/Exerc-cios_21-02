const numeros = [1, 2, 3, 4, 5];

let totalNotas = numeros.reduce((acc, num) => {
    return acc + num / 5;
},0);
console.log(totalNotas);
