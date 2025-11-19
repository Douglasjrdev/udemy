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

 mytititle.addEventListener("click", function(event){
   console.log(event.target)
   console.log(event)
 })

 //stop progragação

 const contbtn = document.querySelector("#container-btn")

 const divbtn = document.querySelector("#div-btn")

 contbtn.addEventListener("click", ()=> {
   console.log("evento 1")
 })

 divbtn.addEventListener("click", (e)=> {
   e.stopPropagation() //tem que chamar o () para executar
   console.log("evento 2")
 })

 //cancelando eventos padrão

 const a = document.querySelector("a")

 a.addEventListener("click", (e)=>{
   e.preventDefault()
   console.log("parou o evento")
 })

 // pegando teclas

 document.addEventListener("keyup", (e)=> {
   console.log(`soltou a tecla ${e.key}`)
 })

 document.addEventListener("keydown", (e)=> {
   console.log(`apertou a tecla ${e.key}`)
 })
