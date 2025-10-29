
//SetTimeout




console.log("ainda não executou!");


setTimeout(() => {
    console.log("executou depois de 2 sec")
}, 2000);


console.log("ainda não executou 2");




//SetInterval

console.log("ainda não executou!");


// setInterval(() => {
//     console.log("executou!");
// }, 3000);



console.log("ainda não executou!2");


//Promisses

const promessa = Promise.resolve(5 + 5);


console.log('algum codigo')



promessa.then((Value) => {
    console.log(`A soma é ${Value}`)
})

console.log('outro codigo')

//falha na promisse

Promise.resolve(4*'asas')
.then((n) => {
    if(Number.isNaN(n)){
        throw new Error ('Valor invalido')
    }
})
.catch((err) => console.log('um erro ocorreu ' + err))

// Async Fuction

async function SomarComDelay(a, b) {

    return a+b;
    
}
SomarComDelay(2, 4).then((value) =>{
    console.log(`o valor da soma é ${value}`)
});