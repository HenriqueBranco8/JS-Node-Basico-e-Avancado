var numeros = [12, 5, 8, 130, 44]

numeros[numeros.length] = 200
numeros[10] = 50

var soma = 0
var maior = numeros[0]
var qtd = 0

for (i in numeros) {

    if (numeros[i] > maior) {
        maior = numeros[i]
    }
    soma += numeros[i]
    qtd ++
    
}

var media = soma / qtd

console.log("Array:", numeros)
console.log("Maior número:", maior)
console.log("Média:", media.toFixed(2))

console.log("Último elemento:", numeros[numeros.length -1])
