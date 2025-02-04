const container = document.querySelector("div")
let gridSize = 64
let grid = []

for (i = 0; i < gridSize * gridSize; i++) {
    grid[i] = document.createElement("div")
    grid[i].classList.add("cell")
    let widthSize = container.clientWidth / gridSize
    let heightSize = container.clientHeight / gridSize

    grid[i].setAttribute("style", "flex-grow: 1; flex-shrink: 0; ")
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
