function verificar(){
    var ano_atual_geral = new Date()
    var ano_atual = ano_atual_geral.getFullYear()
    var ano_nascimento_usuario = document.querySelector('#ano_de_nascimento')
    var button_sexo = document.getElementsByName('escolha_sexo')
    var escreve_html = document.querySelector('#res') //Escreve no HTML
    var genero = ''//Mostra o genero da pessoa
    var cria_img = document.createElement('img') //Cria imagem
    var pai_img = document.querySelector('#img_pessoas')//Lugar das imgs

    if(ano_nascimento_usuario.value.length == 0){
        escreve_html.innerHTML = `Você não colocou nenhum número ou colocou o valor "0". Por favor, adicione uma data de nacimento sem ser "0"` //Mensagem de erro
    } else if(ano_nascimento_usuario.value > ano_atual){
        escreve_html.innerHTML = `Não tem como você nascer depois do ano atual (${ano_atual}). O sistema não é Burro!`
        //mensagem de erro
    } else{
        var calc_idade = ano_atual - Number(ano_nascimento_usuario.value)
        if(button_sexo[0].checked){ //Se for do sexo masculino vai aparecer idade e foto de pessoas do sexo maculino
            genero = 'Maculino'
            if(calc_idade >= 1 && calc_idade < 12){  //Homem Criança
                cria_img.src = 'img/menino.jpg'
                cria_img.alt = 'criança_homem'
                pai_img.appendChild(cria_img)
                escreve_html.innerHTML = `Identificamos uma <strong>Criança</strong> do sexo <strong>${genero}</strong> com <strong>${calc_idade} anos</strong>`
            } else if(calc_idade >= 12 && calc_idade < 18){ //Homem Adolecente
                cria_img.src = 'img/homem-adolecente.jpg'
                cria_img.alt = 'Adolecente homem'
                pai_img.appendChild(cria_img)
                escreve_html.innerHTML = `Identificamos um <strong>Adolecente</strong> do sexo <strong>${genero}</strong> com <strong>${calc_idade} anos</strong>`
            } else if(calc_idade >= 18 && calc_idade < 60){ //Homem Adulto
                cria_img.src = 'img/homen-adulto.jpg'
                cria_img.alt = 'Homem adulto'
                pai_img.appendChild(cria_img)
                escreve_html.innerHTML = `Identificamos um <strong>Adulto</strong> do sexo <strong>${genero}</strong> com <strong>${calc_idade} anos</strong>`
            } else if(calc_idade >= 60){ //Homem Idoso
                cria_img.src = 'img/homem-velho.jpg'
                cria_img.alt = 'Idoso'
                pai_img.appendChild(cria_img)
                escreve_html.innerHTML = `Identificamos um <strong>Idoso</strong> do sexo <strong>${genero}</strong> com <strong>${calc_idade} anos</strong>`
            }
        } else if (button_sexo[1].checked){//Se for do Sexo feminino vai aparecer idade e foto de pessoas do sexo feminino de acordo com a idade
            genero = 'Feminino'
            if(calc_idade >= 1 && calc_idade < 12){ //Criança
                cria_img.src = 'img/menina.jpg'
                cria_img.alt = 'criança_mulher'
                pai_img.appendChild(cria_img)
                escreve_html.innerHTML = `Identificamos uma <strong>Criança</strong> do sexo <strong>${genero}</strong> com <strong>${calc_idade} anos</strong>`
            } else if(calc_idade >= 12 && calc_idade < 18){ //Adolecente
                cria_img.src = 'img/mulher-adolecente.jpg'
                cria_img.alt = 'Menina Adolecente'
                pai_img.appendChild(cria_img)
                escreve_html.innerHTML = `Identificamos uma <strong>Adolecente</strong> do sexo <strong>${genero}</strong> com <strong>${calc_idade} anos</strong>`
            } else if(calc_idade >= 18 && calc_idade < 60){ //Adulta
                cria_img.src = 'img/mulher-adulta.jpg'
                cria_img.alt = 'Mulher adulta'
                pai_img.appendChild(cria_img)
                escreve_html.innerHTML = `Identificamos um <strong>Adulto</strong> do sexo <strong>${genero}</strong> com <strong>${calc_idade} anos</strong>`
            } else if(calc_idade >= 60){ //Idosa
                cria_img.src = 'img/mulher-idosa.jpg'
                cria_img.alt = 'Idosa'
                pai_img.appendChild(cria_img)
                escreve_html.innerHTML = `Identificamos uma <strong>Idosa</strong> do sexo <strong>${genero}</strong> com <strong>${calc_idade} anos</strong>`
            }
    } 
    
}
}