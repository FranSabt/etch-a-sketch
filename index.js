window.onload = () =>{
// grid


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
        setZero();
        let z = this.value;
        document.getElementById("grid").style.gridTemplateColumns = `repeat(${z}, 1fr)`
        document.getElementById("grid").style.gridTemplateRows = `repeat(${z}, 1fr)`

        for(let i = 1; i <= (z * z) ; i++){
            console.log(i)
            const element = document.createElement("div");
            const newDiv = document.getElementById("grid");
            newDiv.appendChild(element).className = "box"
            newDiv.appendChild(element).attributes = 'onclick="colorR()"'
            
            
        }
    }

    function def() {
        setZero();
        let z = 16;
        document.getElementById("grid").style.gridTemplateColumns = `repeat(${z}, 1fr)`
        document.getElementById("grid").style.gridTemplateRows = `repeat(${z}, 1fr)`

        for(let i = 1; i <= (z * z) ; i++){
            console.log(i)
            const element = document.createElement("div");
            const newDiv = document.getElementById("grid");
            newDiv.appendChild(element).className = "box"
            
            
        }
    }


    const setZero = () => {
        let element = document.getElementById("grid");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    def();

// Rainbow

    // solo se está ejecutando en el default
    const rbColor = () => {
        return Math.floor(Math.random() * 16777217 + 1);
    }

    const boxes = document.getElementsByClassName('box'); //quizas un while solucione esto
    console.log(boxes); // 👉️ [div.box, div.box, div.box]

    // ✅ addEventListener to all boxes
    for (const box of boxes) {
    box.addEventListener('click', function onClick() {
        color = '#' + rbColor();
        console.log(color)
        box.style.backgroundColor = `${color}`
    });
    }
}
