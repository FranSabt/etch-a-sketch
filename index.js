
const gridVal = document.getElementById("grid-control");
const output = document.getElementById("grid-size");
output.innerHTML = gridVal.value;
gridVal.oninput = function() {
    output.innerHTML = this.value;
}


console.log(gridVal)