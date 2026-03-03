var vendas = [
    { vendedor: "Ana", valor: 150 },
    { vendedor: "Carlos", valor: 80 },
    { vendedor: "Marina", valor: 220 },
    { vendedor: "João", valor: 50 },
    { vendedor: "Pedro", valor: 300 }
]

var soma = 0
var maior = 0
var quantidade = 0

for (let venda of vendas) {

    if (venda.valor > 100) {

        soma += venda.valor
        quantidade++

        if (venda.valor > maior) {
            maior = venda.valor
        }
    }
}
var media = soma / quantidade

console.log("Soma:", soma)
console.log("Maior:", maior)
console.log("Média:", media.toFixed(2))
