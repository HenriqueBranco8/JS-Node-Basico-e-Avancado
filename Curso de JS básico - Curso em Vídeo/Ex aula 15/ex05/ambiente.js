var pedidos = [
    { cliente: "Ana", total: 250 },
    { cliente: "Carlos", total: 120 },
    { cliente: "Marina", total: 400 },
    { cliente: "João", total: 90 }
]

var totalGeral = 0
var maiorPedido = pedidos[0]

for (let pedido of pedidos) {

    if (pedido.total > maiorPedido.total) {
        maiorPedido = pedido
    }

    totalGeral += pedido.total
}



var media = totalGeral / pedidos.length

console.log("Total geral:", totalGeral)
console.log("Maior pedido:", maiorPedido.cliente)
console.log("Média:", media)
