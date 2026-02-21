const produtos = ["camisa", "calça", "sapato"];

let maisculo = produtos.map(muda =>{
    return muda.toUpperCase();
});
console.log("Produto: ",maisculo);
