const container = document.querySelector("div")
let gridSize = 16
let widthSize = container.clientWidth / gridSize
let heightSize = container.clientHeight / gridSize
let grid = []

for (i = 0; i < gridSize * gridSize; i++) {
    grid[i] = document.createElement("div")
    grid[i].classList.add("cell")
    

    grid[i].style.flexGrow = "1"
    grid[i].style.width = `${widthSize}px`
    grid[i].style.height = `${heightSize}px`
    container.appendChild(grid[i])

}

isMousedown = false

document.querySelectorAll(".cell").forEach(box => {
    box.addEventListener("mousedown", () => {
        isMousedown = true
        box.style.backgroundColor = "black"
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
