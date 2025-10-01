// const a = 10
// const b = 15
// const c = 20
// const d = 25




// function soma(n1,n2) { //valor por parametro são passados por ","
//     //Função por parametro com retorno
//     return n1+n2 //retorna a soma do valor passado por parametro 

// }

// const resultado = soma(a,b) //chama nome da função passada por parametro e soma porque a,b é = a n1 +n2 ou a +b como passado na const

// console.log(resultado)



// //Difernça entre variavel dentro e fora da função

// const y = 10;

// function YdentroDaFunção(){
//     const y = 20;
//     return y
// }

// const dentro = YdentroDaFunção()
// console.log(`Y dentro da função ${dentro}`)

// const fora = y

// console.log(`Y fora da função ${fora}`)



// //ARROW FUCTION, é uma função anonima por isso deve estar dentro de uma variavel

// const testeArrow = () => {
//     console.log('esta é uma arrow fuction')

    
// }

// testeArrow();



// const parOuImpar = (n) =>{
//     if(n % 2 === 0){
//         console.log("par")
//         return;
//     }
//     console.log("Impar")
// };

// parOuImpar(5)
// parOuImpar(10)


// // for of


// const somaIfinita = (...args) => { //igual loop for mas numa estrutura mais simples
//     let total = 0;

//     for (const num of args) {
//         total+= num
//     }
//     return total;

// }

// console.log(somaIfinita(1,2,3,5,6))
// console.log(somaIfinita(6,6))



// //destructuring em objetos

// const usurario = {
//     Nome:'Douglas',
//     Sobre:'Alves',
//     Proficao:'Assistente adm'
// }

// const {Nome, Sobre, Proficao} = usurario


// // renomar variavel

// const {Nome: Name} = usurario


// //destructuring em arrays


// const lista = ['Carro', 'moto','bike']


// const [A, B, C] = lista

// console.log(A,B,C)

// //JSON

// const meuJson = '{"name": "Douglas", "idade": 22, "Skils": ["CSS", "JS", "HTML"]}'

// console.log(meuJson)

// //converterndo pra JSON


// const meuObj =JSON.parse(meuJson)

// console.log(meuObj)


//programação orientada a objetos

// 5 - classes basicas

// const cachorro = {
//     raca: null,
//     patas: 4
// }
// const pitbull = Object.create(cachorro)

// pitbull.raca = 'pitbull'

// console.log(pitbull.raca)
// console.log(pitbull.patas)

// const pincher = Object.create(cachorro)

// pincher.raca = 'pincher'
// pincher.patas = 5

// console.log(pincher.raca)
// console.log(pincher.patas)

// // 6 - função construtora


// function criarCachorro (nome, raca) {

//     const cachorro = Object.create({});

//         cachorro.nome = nome;
//         cachorro.raca = raca;
        

//         return cachorro
   
// }

// const bob = criarCachorro("bob", "husky")

// console.log(bob)

//outro modo de fazer função constutora


function cachorro (raca, nome){

    this.raca = raca
    this.nome = nome

}

const husky = new cachorro('husky' , 'spike')

console.log(husky)

cachorro.prototype.uivar = function () {
    console.log('auUuUUuUu')
}

husky.uivar()

//Classe em JS


class CachorroClasse {
    constructor(nome, raca){

        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClasse("jeff" , "fila")

console.log(jeff)


//mais sobre as classes


class caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
        
    }
    descreverCaminhao() {
        console.log(`Esse caminho tem ${this.eixos} eixos e a cor dele é ${this.cor}`)
    } 
}

const volvo = new caminhao(6, "preto")

console.log(volvo)
volvo.descreverCaminhao()