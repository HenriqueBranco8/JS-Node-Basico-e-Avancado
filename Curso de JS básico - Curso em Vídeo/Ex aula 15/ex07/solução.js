var alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Carlos", notas: [5, 6, 4] },
    { nome: "Marina", notas: [10, 9, 8] },
    { nome: "João", notas: [6, 6, 7] },
    { nome: "Pedro", notas: [] }
]

let maiorMedia = 0
let melhorAluno = ""
let somaTotalNotas = 0
let totalDeNotas = 0

for (let aluno of alunos) {

    let somaIndividual = 0
    let quantidadeNotas = aluno.notas.length

    // 🔹 Se não houver notas
    if (quantidadeNotas === 0) {
        console.log(`Nome: ${aluno.nome} || Notas: [] || Falta Notas`)
        continue
    }

    // 🔹 Soma das notas individuais
    for (let nota of aluno.notas) {
        somaIndividual += nota
        somaTotalNotas += nota
        totalDeNotas++
    }

    let mediaIndividual = somaIndividual / quantidadeNotas

    // 🔹 Verifica maior média
    if (mediaIndividual > maiorMedia) {
        maiorMedia = mediaIndividual
        melhorAluno = aluno.nome
    }

    // 🔹 Situação do aluno
    let status = mediaIndividual >= 7 ? "APROVADO" : "REPROVADO"

    console.log(
        `Nome: ${aluno.nome} || Notas: ${aluno.notas} || Nota total: ${somaIndividual} || Média: ${mediaIndividual.toFixed(1)} || ${status}`
    )
}

// 🔹 Média geral calculada apenas uma vez
let mediaGeral = totalDeNotas > 0 ? somaTotalNotas / totalDeNotas : 0

console.log(`Média da Turma: ${mediaGeral.toFixed(1)}`)
console.log(`Maior Média: ${melhorAluno} ${maiorMedia.toFixed(1)} 🏆`)