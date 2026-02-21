const valores = [100, 200, 50, 150];

let total = valores.reduce((acc, num) => {
    return acc + num
},0);
console.log(total);
