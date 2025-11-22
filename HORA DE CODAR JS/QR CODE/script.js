const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")

//eventos
 function generateQrcode(){
    const qrCodeInputValue = qrCodeInput.value;
     
    if (!qrCodeInputValue) return;  // verifico se o value tem valor se não tiver ele retorna valor vazio

    qrCodeBtn.innerText = "Gerando codigo..." // ao clicar insiro texto gerando codigo

    qrCodeImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;// a src da img pra api com o valor que passei no input
    

    qrCodeImg.addEventListener("load", () => { // insiro um load na img

        
        container.classList.add("active")// o container só recebe class active quando img carregar
        

    })
    
    
    
   
   qrCodeBtn.innerText = "Gerar novamente" // ao gerar img o botão recebe nome gerar novamente
 }
qrCodeBtn.addEventListener("click", () => { // ao clicar chama minha função de gerar codigo
    generateQrcode()
})
qrCodeInput.addEventListener("keydown", (e) => { // função pra gerar com enter também
    if(e.code === "Enter"){
       generateQrcode() 
    }
    
})