const container = document.querySelector(".container")
let inputValue = document.querySelector("input")
let clearAll = document.querySelector("button")

function createGrid(gridSize) {
    let grid = []
    let widthSize = container.clientWidth / gridSize
    let heightSize = container.clientHeight / gridSize

    for (let i = 0; i < gridSize * gridSize; i++) {
        grid[i] = document.createElement("div")
        grid[i].classList.add("cell")
        

        grid[i].style.flexGrow = "1"
        grid[i].style.width = `${widthSize}px`
        grid[i].style.height = `${heightSize}px`
        container.appendChild(grid[i])
    }

}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function sketchPad() {
    let isMousedown = false

    document.querySelectorAll(".cell").forEach(box => {
        box.addEventListener("mousedown", () => {
            isMousedown = true
            box.style.backgroundColor = "black"
            console.log("here")
        })

        box.addEventListener("mouseover", () => {
            if (isMousedown) {
                box.style.backgroundColor = "black"
            }
        })
    })

    document.addEventListener("mouseup", () => {
        isMousedown = false
    })
}

addEventListener("DOMContentLoaded", () => {
    createGrid(inputValue.value)
    sketchPad()
})


inputValue.addEventListener("click", () => {
    clearGrid()
    gridSize = inputValue.value
    sketchPad(createGrid(gridSize))
})

clearAll.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach(box => {
        box.style.backgroundColor = "white"
    })
})