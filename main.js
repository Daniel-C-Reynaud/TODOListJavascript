const checkBoxes = document.querySelectorAll(".cb")
const lists = document.querySelectorAll(".sub-itens")
const showButtons = document.querySelectorAll(".drop-button")
const arrowButtons = document.querySelectorAll(".arrows")
const noArrowButtons = document.querySelectorAll(".no-arrow-button")
const configButton = noArrowButtons[0]
const aboutButton = noArrowButtons[1]
const settingsMenu = document.querySelector(".settings-menu")
const buttonAddItem = document.querySelector(".add-list-item")
const currentList = document.querySelector(".container")
const overlay = document.querySelector(".overlay")

buttonAddItem.addEventListener("click", () => {
   buttonAddItem.classList.add("clickAdd")

   setTimeout(() => {
      buttonAddItem.classList.remove("clickAdd")
   }, 100);
})

configButton.addEventListener("click", () => {
   settingsMenu.classList.toggle("show-settings")
   overlay.classList.toggle("show-settings")
})
   overlay.addEventListener("click", () => {
   settingsMenu.classList.remove("show-settings")
   overlay.classList.remove("show-settings")
})

showButtons.forEach((button, index) => {
   button.addEventListener("click", () => {
      lists[index].classList.toggle("show")

      if (arrowButtons[index].classList.contains("show")) {
         arrowButtons[index].classList.remove("show")
         arrowButtons[index].classList.add("hide")
      } else {
         arrowButtons[index].classList.remove("hide")
         arrowButtons[index].classList.add("show")
      }
   })
})

checkBoxes.forEach((chechBox) => {
   chechBox.addEventListener("click", () => {
      chechBox.classList.toggle("checked");
   })
})

checkBoxes[0].addEventListener("click", () => {
   document.body.classList.toggle("dark-mode");
})

checkBoxes[1].addEventListener("click", () => {
   document.body.classList.toggle("blue-accent");
})
