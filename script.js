// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    // getting table element by ID
    let table = document.getElementById('grid');

    //creating new row <td>
    let newRow = table.insertRow();

    //empty grid
    if(numRows == 0)
    {
        let newCell = newRow.insertCell();
        newCell.onclick = function() { newCell.style.backgroundColor = colorSelected };
        numRows++;
        numCols++;
    }
    else
    {
        // adds columns to match rows
        for (let i = 0; i < numCols; i++) {
            let newCell = newRow.insertCell();
            newCell.onclick = function() { newCell.style.backgroundColor = colorSelected };
        }
        numRows++;
    }   

}

// Add a column
function addC() {
    // getting table element by ID
    let table = document.getElementById('grid');
    
    //empty grid
    if(numCols == 0)
    {
        addR();
    }
    else
    {
        //loop through all rows
        for (let i = 0; i < numRows; i++) {

            //for each row, add a cell 
            let newCell = table.rows[i].insertCell();
            newCell.onclick = function() { newCell.style.backgroundColor = colorSelected };

        }
        numCols++;

    }
}


// Remove a row
function removeR() {
    let table = document.getElementById('grid');

    if(numRows >= 1)
    {
        table.deleteRow(numRows-1);   
        numRows--;
    }

    if(numRows == 0)
        numCols = 0;

}

// Remove a column
function removeC() {
    let table = document.getElementById('grid');

    if(numCols >= 1)
    {
        for(let i = 0; i < numRows; i++)
        {
            table.rows[i].deleteCell(table.rows[i].cells.length - 1);
        }
        numCols--;
    }
    
    if(numCols == 0)
    {
        for(let i = numRows; i > 0; i--)
        {
            table.deleteRow(i-1)
        }
        numRows = 0;

    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}