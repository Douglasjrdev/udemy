const title = document.createElement('h1') //cria um h1

const atributo = document.createAttribute('id') //cria um atributo
atributo.value = 'title1' // cria o nome pro atributo no caso (id)
title.setAttributeNode(atributo) // ele vai adicionar o atributo no tittle no caso aqui foi um h1 que recebeu um id com nome title1 como visto acima
 const text = document.createTextNode('criar nós no dom') // cria um texto no caso um nó

 title.appendChild(text) // atribiu o texto criado acima dento do title neste caso também posso usar o textContet da no mesmo
 document.querySelector('.container').prepend(title) // dessa forma insiro o nó dentro do body mas posso também inserir dentro de um container com metodo queryselector e pegano o id ou class
 //document.querySelector('.container').appendChild(title) // desse modo vc bota dno ultimo elemneto da div eo prepend vc bota em primeiro


 const title2 = document.createElement('h1') //cria um h1
 title2.textContent = 'titulo2'

 document.querySelector('.container').insertBefore(title2, document.querySelector('ul'))

 const container = document.querySelector('.container')

 const span = document.createElement('span')
 span.textContent = 'span dinamica'

 const seungoParagrafo = container.firstChild.nextElementSibling.nextElementSibling
 seungoParagrafo.after('texto inserido por after')
 seungoParagrafo.before(span)
 console.log(seungoParagrafo)
console.log(title)