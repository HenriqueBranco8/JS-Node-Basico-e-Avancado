let num = [8, 0.8, 16, 4, 2, 0]
num.push(1)

let pos = num.indexOf(0.8)
num.sort()
console.log(num)
console.log(`Nosso veto tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
if(pos == -1){
    console.log('não encontramos o número')
}else {
    console.log(`o valor '0.8' está na posição ${pos}`)
}
