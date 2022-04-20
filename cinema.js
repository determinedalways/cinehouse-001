const catalagojson = require('./database/catalago.json')


function adicionarFilme(codigo,titulo,duracao,atores,anoDeLancamento,emCartaz) {
    var obj = {}
        obj.codigo = codigo
        obj.titulo = titulo
        obj.duracao = duracao
        obj.atores = atores
        obj.anoDeLancamento = anoDeLancamento
        obj.emCartaz = emCartaz
    return catalagojson.push(obj)
}
adicionarFilme(2,'madagascar',1,['Chessmito','Will Smith','Juliete'],2023,false)

function buscarFilme(codigo) { 
for (let i = 0; i < catalagojson.length; i++) {
    if (catalagojson[i].codigo === codigo) { 
    return console.log("o código é " + catalagojson[i].codigo + catalagojson[i].titulo ) }
} } 
buscarFilme(2)

  function alterarStatusEmCartaz(codigo) { 
    for (let i = 0; i < catalagojson.length; i++) {
        if (catalagojson[i].emCartaz=== true) { 
        console.log(catalagojson[i] ) }
        else { return console.log("Deu merda")}
    } } 
alterarStatusEmCartaz(3)

