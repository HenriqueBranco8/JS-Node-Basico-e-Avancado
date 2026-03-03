
//Se comonica com o input e tablea do HTML
var number_u = document.querySelector('#number_tabuada')
var tabuada = document.querySelector('#sel_tabuada')


//Função chamada no click
function gerar(){

    //Transforma o número colocado no input
    var deseja_tab = Number(number_u.value)

    //Se não houver nada dentro do input e a pessoa pedir para gerar tabuada, vai aparecer á mensagem de erro.
    if(number_u.value.length == 0){
        alert('[ERRO], adicione um número para gerar tabuada')

    //Se não, vai aparecer a tabuada do número que ela pediu
    } else {

        //Serve para deixar o select vazio do HTML.
        tabuada.innerHTML = ''

        //Cria tabuada
        for(var multiplicador = 0; multiplicador <= 10; multiplicador++){
            var item = document.createElement('option')
            item.text = `${deseja_tab} x ${multiplicador} = ${deseja_tab * multiplicador}`
            item.value = `tabuada${multiplicador}`
            tabuada.appendChild(item)
        }
    }
}