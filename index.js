window.onload = () =>{
// grid


    let defaultSize = 16;
    let size;
    let boxes

    const gridVal = document.getElementById("grid-control");
    const output = document.getElementById("grid-size");

    output.innerHTML = gridVal.value;

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
        boxes = document.getElementsByClassName('box'); //quizas un while solucione esto
        console.log(boxes); // 👉️ [div.box, div.box, div.box]
        
        for (const box of boxes) {
            box.addEventListener('click', function onClick() {
                color = rbColor();
                let hexStr = color.toString(16);
                console.log(hexStr);
                box.style.backgroundColor = `#${hexStr}`
            });
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

//  RAINBOW
/*


    const rbColor = () => {
        return Math.floor(Math.random() * 16777215);
    }

    boxes = document.getElementsByClassName('box');
    console.log(boxes); // 👉️ [div.box, div.box, div.box]

    // ✅ addEventListener to all boxes
    for (const box of boxes) {
        box.addEventListener('click', function onClick() {
            color = rbColor();
            let hexStr = color.toString(16);
            console.log(hexStr);
            box.style.backgroundColor = `#${hexStr}`
        });
    }
*/
    // RAINBOW END
    



    // COLOR SELECTOR

    const colorselection =  document.getElementById("colorpicker")

    let colorSel = null;

    colorselection.oninput= function () {
        colorSel= this.value;
        console.log("color is: " + colorSel)
    }

        
    //colorPicker.addEventListener("input", actualizarPrimero, false);


    boxes = document.getElementsByClassName('box');
    console.log(boxes); // 👉️ [div.box, div.box, div.box]

    // ✅ addEventListener to all boxes
    for (const box of boxes) {
        box.addEventListener('click', function onClick() {
            //color = rbColor();
            //let hexStr = color.toString(16);
            console.log("aun es "+ colorSel);
            box.style.backgroundColor = `${colorSel}`
        });
    }

    // COLOR SELECTOR END
}


