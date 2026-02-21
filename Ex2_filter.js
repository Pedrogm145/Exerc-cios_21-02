const palavras = ["sol", "mar", "computador", "lua", "código"];

let filtrado = palavras.filter(palavra => {
    return palavra.length > 4
});
console.log(filtrado);
