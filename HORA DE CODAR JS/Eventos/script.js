const btn = document.querySelector("#my-button")

btn.addEventListener("click", function() {
    console.log("clicou")
}) //evento base


 //remover evento

 const secondbtn = document.querySelector("#btn")

 function iprimirmsg (){
    console.log("teste")
 }

 secondbtn.addEventListener ("click", iprimirmsg)

 //ao remover o evento a função tem que está nomeada

 const btn3 = document.querySelector("#btn3")

 btn3.addEventListener("click", ()=> {
    console.log("Removeu btn")

    secondbtn.removeEventListener("click", iprimirmsg)

 })

 //argumento do evento

 const mytititle = document.querySelector("#title")

 mytititle.addEventListener("click"
