const itens = window.document.querySelectorAll(" aside ul li i ")

let iconeSelecionado = null
for (let item of itens) {
   item.addEventListener("click", function () {
      item.classList.add("icone-selecionado")

      if (iconeSelecionado && iconeSelecionado !== item) {
         iconeSelecionado.classList.remove("icone-selecionado")
      }

      item.classList.add("icone-selecionado")

      iconeSelecionado = item
   })
   
}