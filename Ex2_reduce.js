const palavras = ["JS", "é", "muito", "legal"];

let frase = palavras.reduce((acc, palavra) => {
    return acc + " " + palavra;
});
console.log(frase);
