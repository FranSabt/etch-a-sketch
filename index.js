let defaultSize = 16;
let size;

const gridVal = document.getElementById("grid-control");
const output = document.getElementById("grid-size");

output.innerHTML = gridVal.value;


if(!output.val){
    size = defaultSize
}

gridVal.oninput = function() {
    output.innerHTML = this.value;
}

gridVal.onchange = function() {
    let z = this.value;
    console.log(z)
    document.getElementById("grid").style.gridTemplateColumns = `repeat(${z}, 1fr)`
    document.getElementById("grid").style.gridTemplateRows = `repeat(${z}, 1fr)`

    for(let i = 1; i <= z; i++){
        console.log(i)
        const element = document.createElement("div");
        const newDiv = document.getElementById("grid");
        newDiv.appendChild(element).className = "box"
        newDiv.appendChild(element).textContent = `${i}`
        //newDiv
        
    }
}


/*
gridVal.oninput = function() {
    output.innerHTML = this.value;
    let size = gridVal.value; //Works! It give us a value to work
    console.log(size)
    document.getElementById("grid").style.gridTemplateColumns = `repeat(${size}, 1fr)`
    document.getElementById("grid").style.gridTemplateRows = `repeat(${size}, 1fr)`
    const element = document.createElement("div");
    for(let i = 0; i < size; i++){
        console.log(i)
        const newDiv = document.getElementById("grid");
        newDiv.appendChild(element).className = "box"
        newDiv.appendChild(element).textContent = `${i}`
        //newDiv
        
    }
    size = 0;
}
*/



