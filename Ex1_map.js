const temperaturas = [20, 25, 30, 15];

let conversao = temperaturas.map(temp =>{
    return temp * 1.8 + 32;
});

console.log(conversao);
