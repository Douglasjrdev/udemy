const title = document.getElementById('title') // peguei o id de title

console.log(title)

const p = document.createElement("p"); //criei um novo elmento no caso tag P

const header = title.parentElement; // criei uma const header e disse que ela é parente do title

console.log(header)

header.insertBefore(p, title) // inserei o p antes do title 

//append child


const navLinks = document.querySelector("nav ul") // peguei caixa onde ia colocar a li

const li = document.createElement("li") //criei a li

navLinks.appendChild(li) // inseri a li criada dentro da caixa que peguei


//replace child

const h2 = document.createElement("h2") //criei um h2


h2.textContent = 'MEU NOVO TITLE' // inseri um valor no h2 criado

header.replaceChild(h2, title) // troquei o h1 pelo h2

const sessao = document.getElementById('sec')

const paragrafo = document.createElement("p")

const sessaoCorpo = sessao.parentElement

paragrafo.textContent = "oia eu aq abestado"

console.log(sessaoCorpo)

sessaoCorpo.insertBefore(paragrafo, sessao)


//createTextNode

const myText = document.createTextNode('testando text node')

const h3 = document.createElement("h3")

h3.appendChild(myText)

console.log(h3)

sessaoCorpo.appendChild(h3)


// mudando css com js


sessaoCorpo.style.color = "red"
