let drawArea = document.querySelector('.draw-area')
let gridDimensions = 16 ;




function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}






let color = document.getElementById("colorPicker"); 
color.addEventListener('input', () => { 
    let cell = drawArea.children ;
    for (let i = 0; i < gridDimensions * gridDimensions; i++) {
        let newColor  = color.value
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = newColor;
        })
    }

})


//first the making of the grid itself

function createGrid(value) {

    removeAllChildNodes(drawArea); 
gridDimensions = value ;
for (let i = 1 ;i <= (gridDimensions * gridDimensions); i++ ) {
const div = document.createElement('div') ;
div.style.height = "50px";
div.style.width = "50px";
div.setAttribute('style', ' background-color: pink;border: 1px solid white');  
div.setAttribute('id', `pixel${i}`) ;
div.addEventListener('mouseover', (e) => {
 e.target.style.backgroundColor = color.value
}) ;
drawArea.setAttribute('style', `grid-template-columns: repeat(${gridDimensions}, 1fr); grid-template-rows: repeat(${gridDimensions}, 1fr);`)
 drawArea.appendChild(div)
}
}
createGrid(16) ;
drawArea.setAttribute('style', `grid-template-columns: repeat(${gridDimensions}, 1fr); grid-template-rows: repeat(${gridDimensions}, 1fr);`)

  let slider = document.getElementById("myRange");
  let output = document.getElementById("demo");
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    removeAllChildNodes(drawArea) ; 
    createGrid(slider.value)
    output.innerHTML = `${slider.value} `  ;
}

let reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    let cell = drawArea.children;
    for (let i = 0 ;i < (gridDimensions * gridDimensions); i++ ) {
    cell[i].style.backgroundColor = "pink"
     let newColor  = color.value
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = newColor;
        })
     
        
    }
});



function randomColor() {
    let letters = "0123456789abcdef" ; 
    let color = "#"; 
    for (let i = 0; i < 6; i++){
    color += letters[Math.floor((Math.random()) * 16)] ; }
    return color ;

}

const rgb = document.getElementById('rgb');
rgb.addEventListener('click', ()=> {
    let cell = drawArea.children;
    for (let i = 0 ;i < (gridDimensions * gridDimensions); i++ ) { 
    cell[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = randomColor()
       }) 
     
        
    }
});




const black = document.getElementById('black');
black.addEventListener('click', ()=> {
    let cell = drawArea.children;
    for (let i = 0 ;i <= (gridDimensions * gridDimensions); i++ ) { 
    cell[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "black"
       }) 
     
        
    }
});



const eraser = document.getElementById('eraser');
eraser.addEventListener('click', ()=> {
    let cell = drawArea.children;
    for (let i = 0 ;i <= (gridDimensions * gridDimensions); i++ ) { 
    cell[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "pink"
       }) 
     
        
    }
});

