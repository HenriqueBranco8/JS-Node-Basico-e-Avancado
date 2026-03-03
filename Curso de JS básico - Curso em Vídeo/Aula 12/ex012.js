var pega_hora = new Date()
var hora = pega_hora.getHours()

if(hora < 12 && hora >= 5){
    console.log(`Agora são ${hora} horas. Bom dia!`)
} else if (hora >= 12 && hora <= 17){
    console.log(`Agora são ${hora} horas. Boa Tarde!`)
} else if (hora >= 18 && hora <= 23){
    console.log(`Agora são ${hora} horas. Boa Noite`)
} else if (hora >= 0 && hora <= 4){
    console.log(`Agora são ${hora} horas da madrugada. Boa MADRUGADA!`)
}