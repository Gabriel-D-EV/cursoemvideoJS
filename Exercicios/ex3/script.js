var n = document.querySelector('#fn')
var lst = document.querySelector('#flst')
var res = document.querySelector('div#res')
var v = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n))!= -1){
        return true
    } else {
        return false
    }
}
function adicionar(){
    if(isNumero(n.value) && !inLista(n.value, v)){
        v.push(Number(n.value))
        var item = document.createElement('option')
        item.text = `Valor ${n.value} adicionado`
        lst.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor invalido ou já encontrado na lista')
    }
    n.value = ''
    n.focus()

}

function finalizar(){
    if(v.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        var tot = v.length
        var maior = v[0]
        var menor = v[0]
        var soma = 0
        for(var c = 0; c < v.length; c++){
            soma += v[c]
            if(v[c] > maior){
                maior = v[c]
            }
            if(v[c] < menor){
                menor = v[c]
            }
        }
        var media = soma / tot
        res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}