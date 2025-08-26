const a = 10
const b = 15
const c = 20
const d = 25




function soma(n1,n2) { //valor por parametro são passados por ","
    //Função por parametro com retorno
    return n1+n2 //retorna a soma do valor passado por parametro 

}

const resultado = soma(a,b) //chama nome da função passada por parametro e soma porque a,b é = a n1 +n2 ou a +b como passado na const

console.log(resultado)



//Difernça entre variavel dentro e fora da função

const y = 10;

function YdentroDaFunção(){
    const y = 20;
    return y
}

const dentro = YdentroDaFunção()
console.log(`Y dentro da função ${dentro}`)

const fora = y

console.log(`Y fora da função ${fora}`)



//ARROW FUCTION, é uma função anonima por isso deve estar dentro de uma variavel

const testeArrow = () => {
    console.log('esta é uma arrow fuction')

    
}

testeArrow();



const parOuImpar = (n) =>{
    if(n % 2 === 0){
        console.log("par")
        return;
    }
    console.log("Impar")
};

parOuImpar(5)
parOuImpar(10)
