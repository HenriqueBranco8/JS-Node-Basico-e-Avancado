var input_number = document.querySelector('#input_number')
var seletc_guarda = document.querySelector('#guarda_numbers')
var res = document.querySelector('#res')
var numbers = []

function analisar(){
    let inpt_number = Number(input_number.value)
    if(inpt_number > 100){
        alert('[Erro], Você digitou um número maior que 100')
    } else if(inpt_number < 1){
        alert('[Erro], Você digitou um número menor que 1 ou digitou nada')
    } else {
        var f = false
        for(i of numbers){
            if(i === inpt_number){
                
                f = true
            }
        }
        if(f){
            alert(`tem ${inpt_number}`)
        }else{
            numbers.push(inpt_number)
            let item = document.createElement('option')
            item.text = `Valor ${inpt_number} Adicionado`
            item.value = `${inpt_number}`
            seletc_guarda.appendChild(item)
        }
        
       
    }

}
function finalizar(){
    let soma = 0
    for(x of numbers){
        soma += x
        media = soma / numbers.length
        numbers.sort()
        res.innerHTML = `<br>Ao todo, temos ${numbers.length} números cadastrados</br>`
        res.innerHTML += `<br>O maior valor foi ${numbers[numbers.length - 1]}</br>`
        res.innerHTML += `<br>soma: ${soma}</br>`
        res.innerHTML += `<br>média: ${media.toFixed(2)}</br>`
    }
    
}