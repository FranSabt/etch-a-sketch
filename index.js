
const gridVal = document.getElementById("grid-control");
const output = document.getElementById("grid-size");

output.innerHTML = gridVal.value;



gridVal.oninput = function() {
    output.innerHTML = this.value;
    let size = gridVal.value; //Works! It give us a value to work
    console.log(size)
    document.getElementById("grid").style.gridTemplateColumns = `repeat(${size}, 1fr)`
    document.getElementById("grid").style.gridTemplateRows = `repeat(${size}, 1fr)`
    const element = document.createElement("div");
    for(let i = 0; i < size; i++){
        const newDiv = document.getElementById("grid");
        newDiv.appendChild(element).className = "box"
        //newDiv
        
    }
    size = 0;
}


