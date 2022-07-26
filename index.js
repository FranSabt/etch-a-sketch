
// grid

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
            //console.log(i)
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
            //console.log(i)
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



    const colorGrid = (btn) => {
        if (btn === 'color'){
            colorPicked()
        }
        else if (btn === 'rainbow'){
            rainbow()
        }
        else if (btn === 'eraser'){
            eraser();
        }
        else if (btn === 'kill'){ // i know, bad practice, but i jus wanna have some fun xP
            killEmHall();
        }
        else {
            console.log('hello');
        }
    }



//  RAINBOW //


const rainbow = () =>{
    const rbColor = () => {
        return Math.floor(Math.random() * 16777215);
    }
    boxes = document.getElementsByClassName('box');
    //console.log(boxes); // 👉️ [div.box, div.box, div.box]

    // ✅ addEventListener to all boxes
    for (const box of boxes) {
        box.addEventListener('click', function onClick() {
            color = rbColor();
            let hexStr = color.toString(16);
            //console.log(hexStr);
            box.style.backgroundColor = `#${hexStr}`
        });
    }
}   
 // RAINBOW END //
    



    // COLOR SELECTOR //
const colorPicked = ()  =>{
    const colorselection =  document.getElementById("colorpicker")

    let colorSel = null;

    colorselection.oninput= function () {
        colorSel= this.value;
        //console.log("color is: " + colorSel)
    }
    boxes = document.getElementsByClassName('box');
    for (const box of boxes) {
        box.addEventListener('click', function onClick() {
            box.style.backgroundColor = `${colorSel}`
        });
    }
}

    // COLOR SELECTOR END //

    //ERASER //
const eraser = () => {
    boxes = document.getElementsByClassName('box');
    for (const box of boxes) {
        box.addEventListener('click', function onClick() {
            box.style.backgroundColor = `#ffffff`
        });
    }
}
    //ERASER  END//

const killEmHall = () =>{
    boxes = document.getElementsByClassName('box');
    for (const box of boxes) {
        box.style.backgroundColor = `#ffffff`
    }
}






