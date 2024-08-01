let valor = document.getElementById('txtEmail')
let msg = document.querySelector('.feed')


function cadastro(){
    let ValorDoInput = valor.value
    msg.style.color = 'red'
    msg.innerHTML = `O email ${ValorDoInput} foi cadastrado com sucesso`
    

}