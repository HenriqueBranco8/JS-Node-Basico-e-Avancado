var num = [14, 42, 58, 3, 7, 91, 58].sort((a, b) => a - b)//Posição dos vetores em ordem crescente

var soma = 0
var qtd = 0 //Quantidade
var i = 0
var mostra = 0
for(mostra in num){
    //Mostra indices e elementos do vetor
    console.log(`Posição ${mostra} tem o número ${num[mostra]}`)

    //Soma e quantidade para calcular à media
    soma += num[mostra]
    qtd++
}
console.log(`Soma: ${soma}`)
//Sabendo que o número está em ordem crescente só fazer aparecer o maior númer que será o ultimo índice.
console.log(`Maior número: ${num[num.length - 1]}`)

//Menor número
console.log(`Menor número: ${num[num.length - 7]}`)

//media
var media = soma / qtd
console.log(`Media: ${parseInt(media)}`)


//Mostra todos os números maiores que à media
for(i in num){
    if(num[i] > media){
        console.log(`maiores: ${num[i]}`)
    }
}

/*
for(i in num){
    if(i > media){
        console.log(`teste : ${i}`)
    }
}
    */
/*
if(num.length > media){
    console.log(`maior: ${num.length}`)
}

*/


/*
if(mostra > media){
    console.log(`Maior: ${num[mostra]}`)
}
Maior: 91
*/

