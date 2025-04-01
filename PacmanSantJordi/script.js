document.addEventListener("DOMContentLoaded", function(){





const scoreDisplay = document.getElementById("score");
const width = 28;
let score = 0; 
const grid = document.querySelector(".grid");

// 0 - petalos 
// 1 - paret 
// 2 - guarida 
// 3 - rosa superpoder 
// 4 - buit 
//5 - rosa

const layout = [
    0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 3, 3, 3, 3, 3, 3, , 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0,
    0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0,
    0, 0, 3, 0, 1, 1, 0, 3, 0, 0, 0, 3, 0, 1, 1, 1, 0, 3, 0, 1, 1, 1, 0, 3, 3, 3, 0, 0,
    0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0,
    0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 3, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 3, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 3, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 3, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 0, 3, 0, 0,
    4, 4, 4, 4, 4, 4, 4, 3, 0, 0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0,
    0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0,
    0, 0, 3, 0, 1, 1, 0, 3, 0, 1, 1, 1, 1, 0, 3, 0, 1, 1, 1, 1, 0, 3, 0, 1, 0, 3, 0, 0,
    0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0,
    0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 

]


let squares = []


//crear tablero 
function createBoard(){
    for(let i=0; i < layout.length; i++){
        const square = document.createElement('div')
        if(layout[i]==0){
            square.classList.add("murs")
        }else if(layout[i]==1){
            square.classList.add("green")
        }else if(layout[i]==2){
            square.classList.add("guarida")
        }else if(layout[i]==3){
            square.classList.add("petalos")
        }else if(layout[i]==4){
            square.classList.add("pink")
        
        }   
        
            grid.appendChild(square);
            squares.push(square)
    }
}

createBoard()
console.log(squares)


let posicioPrincep = 231;
squares[posicioPrincep].classList.add("principe")

function movePrincipe(e){
    squares[posicioPrincep].classList.remove("principe")
    switch(e.key){
        case 'ArrowLeft': 
            if (!squares [posicioPrincep -1].classList.contains('murs') && !squares[posicioPrincep -1].classList.contains('guarida'))    
            posicioPrincep-=1
            break;
    
        case 'ArrowRight': 
        if (!squares [posicioPrincep +1].classList.contains('murs') && !squares[posicioPrincep +1].classList.contains('guarida'))
            posicioPrincep += 1
            break
    
        case 'ArrowUp': 
        if (!squares [posicioPrincep -28].classList.contains('murs') && !squares[posicioPrincep -28].classList.contains('guarida'))
           posicioPrincep-=28
        break

        case 'ArrowDown': 
        if (!squares [posicioPrincep +28].classList.contains('murs') && !squares[posicioPrincep +28].classList.contains('guarida'))
            posicioPrincep += 28
            break
    }
    squares[posicioPrincep].classList.add("principe")

}

document.addEventListener('keyup', movePrincipe);









}
)