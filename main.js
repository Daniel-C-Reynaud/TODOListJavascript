const checkBoxes = document.querySelectorAll(".cb")
const lists = document.querySelectorAll(".sub-itens")
const showButtons = document.querySelectorAll(".drop-button")
const arrowButtons = document.querySelectorAll(".arrows")
const noArrowButtons = document.querySelectorAll(".no-arrow-button")
const configButton = noArrowButtons[0]
const settingsMenu = document.querySelector(".settings-menu")
const buttonActionColor = document.querySelector(".action-button")
const currentList = document.querySelector(".container")
const overlay = document.querySelector(".overlay")
const theme = checkBoxes[0]

let isDark = localStorage.getItem("isDark") === "true"

if (isDark) {
   document.body.classList.add("dark-mode")
   theme.checked = true
}

buttonActionColor.addEventListener("click", () => {
   buttonActionColor.classList.add("clicked")

   setTimeout(() => {
      buttonActionColor.classList.remove("clicked")
   }, 100)
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

function updateThemeAndAccent() {

   if (isDark) {
      document.body.classList.add("dark-mode");
   } else {
      document.body.classList.remove("dark-mode");
   }
}

theme.addEventListener("click", () => {
   isDark = !isDark;
   localStorage.setItem("isDark", isDark);
   updateThemeAndAccent();
});

updateThemeAndAccent()