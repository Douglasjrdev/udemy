const buttons = document.querySelectorAll("#image-picker li");
const image =document.querySelector("#product-image");

buttons.forEach((btn) => { //foreach dos butões
  btn.addEventListener("click", (e) => { //adicionei um evento de click no botão
    console.log(e);

    buttons.forEach((btn) =>{ //fiz outro for each pra remover as classe selected
      btn.querySelector(".color").classList.remove("selected")
    })
    //dps que removi agora adiciono onde clickar
     const button = e.target

     const id = button.getAttribute("id") //peguei o atributo do id

     button.querySelector(".color").classList.add("selected")//adicionei a classe selectd no item clickado

     image.classList.add("changing")//adicionei a calsse changig que deixa image clara
     image.setAttribute("src", `img/iphone_${id}.jpg`)// vou trocar o src quando clickar na img pelo id

     setTimeout(() => {
      image.classList.toggle("changing")// toggle para voltar a classe se já tiver a classe ela romeve o timeoutt é pra fazer a verificação dps de 200ms
     },200);
  })
})

