let inpt_num = document.querySelector('#input_number')
let guarda_num = document.querySelector('#guarda_numbers')
let res = document.querySelector('#res')

let valores = []

function isnumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inlist(n, list){
    if(list.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function analisar(){
    res.innerHTML = ``
    if(isnumber(inpt_num.value) && !inlist(inpt_num.value, valores)){
        let item = document.createElement('option')
        valores.push(Number(inpt_num.value))
        item.text = `Valor ${inpt_num.value} adicionado.`
        guarda_num.appendChild(item)
    } else {
        alert('[Erro]')
    }
    inpt_num.value = ``
    input_number.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('adicione algum valor')
    } else {
        let indices = valores.length
        
        
        if(indices === 1){
            res.innerHTML += `<p>Ao todo, temos ${indices} número adicionado</p>`
        } else {
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            
            for(pos of valores){
                soma += pos
                media = soma / valores.length
                if(pos > maior){
                    maior = valores[pos]
                } if(pos < menor){
                    menor = valores[pos]
                }
            }
            res.innerHTML += ``
            res.innerHTML += `<p>Ao todo, temos ${indices} números adicionados</p>`
            res.innerHTML += `<p>O maior número informado foi ${maior} </p>`
            res.innerHTML += `<p>O menor número informado foi ${menor} </p>`
            res.innerHTML += `<p>Somando todos os valores, temos ${soma} </p>`
            res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)} </p>`
        }
        
        
    }
}