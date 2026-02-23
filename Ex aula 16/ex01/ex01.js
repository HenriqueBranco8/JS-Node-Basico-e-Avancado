var input_number = document.querySelector('#input_number')
var seletc_guarda = document.querySelector('#guarda_numbers')

var numbers = []

function analisar(){
    let inpt_number = Number(input_number.value)
    if(inpt_number > 100){
        alert('erro')
    } else if(inpt_number < 1){
        alert('erro')
    } else {
        seletc_guarda.innerHTML = ``
        numbers.push(inpt_number)
       
        for(guarda_numero of numbers){
            let item = document.createElement('option')
            item.text = `Valor ${guarda_numero} Adicionado`
            item.value = `${guarda_numero}`
            seletc_guarda.appendChild(item)
            
        }
        
    }
    
}
