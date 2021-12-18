const createList = (Elements, Text) =>{
  const ul = document.createElement("ul")
  document.getElementById("conteudo").appendChild(ul)
  for (let c = 0; c < Elements; c++){
    const texto = document.createTextNode(Text)
    const li = document.createElement("li")
    li.appendChild(texto)
    ul.appendChild(li)

  }

}
const lista = createList(5, "Item");