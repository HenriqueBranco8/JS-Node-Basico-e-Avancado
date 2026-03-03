var numeros = [10, 20, 30, 40, 50]

var soma = 0

for (let i of numeros) {
    if (i % 2 == 0) {
        soma += i
    }
    
}

console.log("Soma dos pares:", soma)
