'use strict';

const createGridBtn = document.getElementById('generate-grid');

const rowCountInput = document.getElementById('rows')
const columnCountInput = document.getElementById('columns')

createGridBtn.addEventListener('click', () =>{
    const grid = createGrid(rowCountInput.value, columnCountInput.value)
    
    document.body.append(grid)
    
})

function createGrid(rowCount, columnCount) {
   
    const grid = document.createElement('div')

    grid.classList.add('grid')

    for (let i = 0; i < rowCount*columnCount; i++) {
        const gridCell = document.createElement('div')

        gridCell.classList.add('grid-cell')

        grid.append(gridCell)
    }

    grid.style.width = `${14 * columnCount}px`

    return grid
}