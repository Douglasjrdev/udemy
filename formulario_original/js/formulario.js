
(function(){
    'use strict';

    const txtitulo = document.getElementById('txtTitulo');
    const formcadastro = document.querySelector('.formCadastro');
    const btn = document.getElementById('btn')
    formcadastro.addEventListener('submit', function(e){
        if(!txtitulo.value){
            alert('preencha todos os campos')
            e.preventDefault()
            txtitulo.focus()
        }
    })

    const txtDescricao = document.querySelector('#txtDescricao')
    const contadorcontainer = document.querySelector('#contador')
    const resta = contadorcontainer.getElementsByTagName('span')[0]
    const maxima = txtDescricao.maxLength
    mostrarnumeros(maxima)
    txtDescricao.addEventListener('input',function(){
        let numerosletrasdigitadas = this.value.length
         let caracteresRestantes = parseInt(maxima) - parseInt(numerosletrasdigitadas)
         mostrarnumeros(caracteresRestantes)

        
         
    })
    function mostrarnumeros(n){
        resta.textContent = n
     }
     btn.disabled = true
     const chkAceito = document.getElementById('chkAceito')
})()