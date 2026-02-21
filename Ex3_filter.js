const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];
 
let soC = animais.filter(filtro => {
    return filtro.startsWith ("c")
});
console.log(soC);
