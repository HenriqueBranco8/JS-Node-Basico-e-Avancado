var number = 5 
var contador = 1
var soma = 0
var qtd = 0
while(contador <= number){ 
    console.log(`passo - ${contador}`)
    soma += contador++
    qtd++
}
console.log(`Quantidade: ${qtd}`)
console.log(`Soma:${soma}`)