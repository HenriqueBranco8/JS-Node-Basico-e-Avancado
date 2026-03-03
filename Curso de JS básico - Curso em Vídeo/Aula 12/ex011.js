var idade = 128452

if(idade <= 15){
    console.log(`Você tem ${idade} anos, você não pode votar`)
} else if(idade == 16 || idade == 17) {
    console.log(`Você tem ${idade} anos, seu voto é opcional`)
} else if(idade >= 18 && idade <= 64){
    console.log(`Você tem ${idade} anos, seu voto é obrigatório`)
} else if(idade >= 65){
    console.log(`Você tem ${idade} anos, seu voto é opcional`)
}