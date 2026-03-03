
//Se conecta com o HTML
var Inicio = document.querySelector('#inicio')
var Fim = document.querySelector('#fim')
var Passo = document.querySelector('#passo')
var res = document.querySelector('#res') 

//Função click
function conta(){
    //Pega os valores dos inputs e transforma em número
    var inicio = Number(Inicio.value)
    var fim = Number(Fim.value)
    var passo = Number(Passo.value)

    //Se todos os inputs não tiver número, vai aparecer essa mensagem.
    if(Inicio.value.length == 0 && Fim.value.length == 0 && Passo.value.length == 0){
        res.innerHTML = 'Não à problema em ser vazio, porém sem algo que nos mova, não à um motivo de partida e o fim nunca chegará.'
        

    //Se o input 'Inicio' não conter número, vai aparecer esse mensagem.
    } else if(Inicio.value.length == 0){
        res.innerHTML = 'Não encontramos um inicio, então nunca chegaremos ao resultado final...'

    //Se o input 'Fim' não conter níumero, vai aparecer essa mensagem.
    }else if(Fim.value.length == 0){
        res.innerHTML = 'Você se encontrou mas se não almejar algo para o final, nunca vencerá...'


    //Se o input 'Passo' não conter número, vai aprecer essa mensagem.
    } else if(Passo.value.length == 0){
        res.innerHTML = 'Cada passo rumo à vitória é importante. Não pule a etapa de andar.'


    //Se o fim for maior que o inicio, vai aparecer uma ordem crescente do inicio ao fim.    
    } else if (inicio < fim){
        for(; inicio < fim; inicio += passo){
            res.innerHTML += `${inicio} \u{1F449} `
            
        }
        res.innerHTML += `\u{1F3C1}`


    //Se o Incio for mairo que o fim, vai aparecer uma ordem decrescente até chegar ao fim.
    } else if(inicio > fim){
        for(inicio == passo; inicio > fim; inicio -= passo){
            res.innerHTML += `${inicio} \u{1F449} `
        }
        res.innerHTML += `\u{1F3C1}`

    //Mensagem de erro
    } else if(passo > fim, inicio){
        alert('Nossos passos não podem ser maiores do que a força que nos move para sair do inicio, nem maiores que fim que nôs aguarda. Não á chance de pular o Inicio e o Final! ')
    }
    
    
    
     

    
    
}