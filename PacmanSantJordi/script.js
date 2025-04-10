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
//5 - caballo

const layout = [
    0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0,
    0, 0, 3, 0, 0, 0, 0, 5, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0,
    0, 0, 3, 0, 1, 1, 0, 3, 0, 0, 0, 3, 0, 1, 1, 1, 0, 3, 0, 1, 1, 1, 0, 3, 3, 3, 0, 0,
    0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0,
    0, 0, 3, 3, 4, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 3, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0,
    0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0,
    0, 0, 3, 0, 1, 1, 0, 3, 0, 1, 1, 1, 1, 0, 3, 0, 1, 1, 1, 1, 0, 3, 0, 1, 0, 3, 0, 0,
    0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0,
    0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 

]


let squares = [];


//crear tablero 
function createBoard(){
    for(let i=0; i < layout.length; i++){
        const square = document.createElement('div')
        if(layout[i]==0){
            square.classList.add("murs")
        }else if(layout[i]==1){
            square.classList.add("huecos")
        }else if(layout[i]==2){
            square.classList.add("guarida")
        }else if(layout[i]==3){
            square.classList.add("petalos")
        }else if(layout[i]==4){
            square.classList.add("rosa")
        
        }else if(layout[i]==5){
            square.classList.add("caballo")
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
            if (!squares [posicioPrincep -1].classList.contains('murs') && 
            !squares[posicioPrincep -1].classList.contains('guarida'))   {
            posicioPrincep-=1 
            } 
            
            if (squares[posicioPrincep - 1] === squares[392]){
                posicioPrincep = 195
            }
            break
    
        case 'ArrowRight': 
        if (!squares [posicioPrincep +1].classList.contains('murs') &&
            !squares[posicioPrincep +1].classList.contains('guarida')){
            posicioPrincep += 1
            }

            if (squares[posicioPrincep + 1] === squares [195]){
                posicioPrincep = 392
            }
            break
    
        case 'ArrowUp': 
        if (!squares [posicioPrincep -28].classList.contains('murs') && !squares[posicioPrincep -28].classList.contains('guarida'))
           posicioPrincep-=28
        break;

        case 'ArrowDown': 
        if (!squares [posicioPrincep +28].classList.contains('murs') && !squares[posicioPrincep +28].classList.contains('guarida'))
            posicioPrincep += 28
            break;
    }
    squares[posicioPrincep].classList.add("principe")

   cogerPetalos()
    rosaCogida()
    cogerCaballo()
    // checkForWin()
    //checkForgameOver()


}

document.addEventListener('keyup', movePrincipe);

function cogerPetalos(){

    if (squares[posicioPrincep].classList.contains('petalos')){
        score++ 
        scoreDisplay.innerHTML=score
        squares[posicioPrincep].classList.remove('petalos')

    }
}

function rosaCogida(){
    
if (squares[posicioPrincep].classList.contains('rosa')){
    score+=10
    scoreDisplay.innerHTML=score
    squares[posicioPrincep].classList.remove('rosa')

    espantaDracs(true)
    setTimeout(()=>espantaDracs(false),10000)
    
}

}

function espantaDracs(scaredDrac){
    dracs.forEach(drac=> drac.isScared=scaredDrac)
}


function cogerCaballo(){

   if (squares[posicioPrincep].classList.contains('caballo')){
    score+=6
    scoreDisplay.innerHTML=score
    squares[posicioPrincep].classList.remove('caballo')

   }


   
}


    class Drac {
        constructor(className, startIndex, speed){
            this.className=className
            this.startIndex=startIndex
            this.speed=speed
            this.currentIndex=startIndex
            this.isScared=false 
            this.timerId=NaN

        }
    }

    const dracs = [
        new Drac('dragon1', 378, 550),
        new Drac('dragon2', 405, 550),
        new Drac('dragon3', 402, 550),
        new Drac('dragon4', 375, 500), 
    

    ]
    
    //console.log (dracs)

    dracs.forEach(drac=>squares[drac.currentIndex].classList.add(drac.className, 'drac'))

    dracs.forEach(drac=>moveDrac(drac))

    function moveDrac(drac){
    
        const directions =[-1,1, width, -width]
        let direction = directions[Math.floor(Math.random()*directions.length)]

    drac.timerId=setInterval(function (){
        if(
            !squares [drac.currentIndex+direction].classList.contains('murs') &&  
            !squares [drac.currentIndex+direction].classList.contains('drac')

        ){
          squares[drac.currentIndex].classList.remove(drac.className, 'drac', 'dragonAsustado') 
          drac.currentIndex+=direction
          squares[drac.currentIndex].classList.add(drac.className, 'drac')

        }else direction=directions[Math.floor(Math.random()*directions.length)]


    if(drac.isScared){
    squares[drac.currentIndex].classList.add(drac.className, 'dragonAsustado')
    }
    
    if(drac.isScared && squares[drac.currentIndex].classList.contains ('principe')){
        score+=100
        scoreDisplay.innerHTML =score
        squares[drac.currentIndex].classList.remove(drac.className, 'drac', 'dragonAsustado')
        drac.currentIndex=drac.startIndex
        drac.isScared=false
        squares[drac.currentIndex].classList.add(drac.className, 'drac')

    }

    }, drac.speed
    )    
    }



}
)