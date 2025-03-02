const checkBoxes = document.querySelectorAll(".cb")
const showButtons = document.querySelectorAll(".drop-button")
const arrowButtons = document.querySelectorAll(".arrows")
const noArrowButtons = document.querySelectorAll(".button")
const configButton = noArrowButtons[0]
const settingsMenu = document.querySelector(".settings-menu")
const buttonActionColor = document.querySelector(".action-button")
const currentList = document.querySelector(".container")
const overlay = document.querySelector(".overlay")
const theme = checkBoxes[0]
const inputText = document.querySelector(".text-adder")
const inputAddItem = document.querySelector(".add-item")
const taskHolder = document.querySelector(".task-holder")
const hambMenu = document.querySelector(".open-menu")
const sideBar = document.querySelector(".sidebar")
const sideBarUl = document.querySelector(".side-content")

let isDark = localStorage.getItem("isDark") === "true"

if (isDark) {
   document.body.classList.add("dark-mode")
   theme.checked = true
}

hambMenu.addEventListener("click", () => {
   sideBarUl.classList.toggle("show-menu")
})

buttonActionColor.addEventListener("click", () => {
   buttonActionColor.classList.add("clicked")

   setTimeout(() => {
      buttonActionColor.classList.remove("clicked")
   }, 100)
})

configButton.addEventListener("click", () => {
   settingsMenu.classList.add("show-settings")
   overlay.classList.add("show-settings")
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
      document.body.classList.add("dark-mode")
   } else {
      document.body.classList.remove("dark-mode")
   }
}

theme.addEventListener("click", () => {
   isDark = !isDark
   localStorage.setItem("isDark", isDark)
   updateThemeAndAccent()
})

updateThemeAndAccent()
inputAddItem.addEventListener("click", () => {
   const taskText = inputText.value.trim()

   if (taskText !== "") {
      const taskElement = document.createElement("div")
      const taskTextElement = document.createElement("p")
      const checkbox = document.createElement("input")
      const deleteItem = document.createElement("span")
      checkbox.type = "checkbox"
      checkbox.classList.add("task-checkbox")
      deleteItem.classList.add("material-icons")
      deleteItem.classList.add("task-deleter")
      taskElement.classList.add("task-item")
      taskTextElement.textContent = taskText
      deleteItem.textContent = "delete"

      taskElement.prepend(checkbox)
      taskElement.appendChild(taskTextElement)
      taskElement.appendChild(deleteItem)
      taskHolder.appendChild(taskElement)
      inputText.value = ""

      checkbox.addEventListener("click", () => {
         taskTextElement.classList.toggle("completed")
         saveData()
      })

      deleteItem.addEventListener("click", () => {
         taskHolder.removeChild(taskElement)
         saveData()
      })

      saveData()
   }
})

function saveData() {
   const tasks = []
   const taskItems = document.querySelectorAll(".task-item")

   taskItems.forEach(taskItem => {
      const checkbox = taskItem.querySelector(".task-checkbox")
      const taskTextElement = taskItem.querySelector("p") 
      const text = taskTextElement.textContent.trim()
      const completed = checkbox.checked

      tasks.push({ text, completed })
   })

   localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadData() {
   const savedTasks = localStorage.getItem("tasks")

   if (savedTasks) {
      const tasks = JSON.parse(savedTasks)

      tasks.forEach(task => {
         const taskElement = document.createElement("div")
         const taskText = document.createElement("p")
         const checkbox = document.createElement("input")
         const deleteItem = document.createElement("span")
         checkbox.type = "checkbox"
         deleteItem.classList.add("material-icons")
         deleteItem.classList.add("task-deleter")
         checkbox.classList.add("task-checkbox")
         taskElement.classList.add("task-item")
         taskText.textContent = task.text
         deleteItem.textContent = "delete"
         checkbox.checked = task.completed
         if (task.completed) {
            taskText.classList.add("completed")
         }

         taskElement.prepend(checkbox)
         taskElement.appendChild(taskText)
         taskElement.appendChild(deleteItem)
         taskHolder.appendChild(taskElement)

         checkbox.addEventListener("click", () => {
            taskText.classList.toggle("completed")
            saveData()
         })

         deleteItem.addEventListener("click", () => {
            taskHolder.removeChild(taskElement)
            saveData()
         })
      })
   }
}

loadData()