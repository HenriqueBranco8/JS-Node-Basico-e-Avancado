const numbers = [7, 42, 89, 13, 56, 91, 24, 68, 35, 77]
var mostra = 0
var soma = 0

for(mostra in numbers){

    //Mostra o array completo. Posições e elementos correspondente a elas
    console.log(`posição ${mostra} tem o valor ${numbers[mostra]}`)


    //Vai mostrar todos os números pares
    var par = numbers[mostra] % 2
    if(par == 0){
        console.log(`par: ${numbers[mostra]}`)
    } 
}

//Soma todos os números dentro do vetor.
for(var todos = 0; todos < numbers.length; todos++){
        soma+= numbers[todos]
        
}
console.log(`Soma de todos os números: ${soma}`)
