//pegando elementos

const multiplicationform = document.querySelector("#multiplication-form")
const numberinput = document.querySelector("#number")
const multiplicationinput = document.querySelector("#multiplicator")

const multiplicationTable = document.querySelector("#multiplication-operations")

const multiplicatiotitle = document.querySelector("#multiplication-title span")

//funções
const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = "";

  for(i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i

   const template = ` <div class="row">
        <div class= "operation">${number}x ${i} = </div>
        <div class= "result">${result}</div>

       
      </div>` // criei um html no js

      const parser = new DOMParser() // criei um parser

      const tempalteHTML = parser.parseFromString(template, "text/html") // peguei o parser e converti para string

      const row = tempalteHTML.querySelector(".row")// peguei o row no query

      multiplicationTable.appendChild(row) // e inseri um filho na table


  }
  multiplicatiotitle.innerHTML = number;
}

//eventos

multiplicationform.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberinput.value;

  const multiplicatorNumber = +multiplicationinput.value

  createTable(multiplicationNumber, multiplicatorNumber)

})