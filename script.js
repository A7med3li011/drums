let dives = document.querySelectorAll(".dives div")
let sound1 = document.getElementById("1");
let sound2 = document.getElementById("2");
let sound3 = document.getElementById("3");
let sound4 = document.getElementById("4");
let sound5 = document.getElementById("5");
let sound6 = document.getElementById("6");
let sound7 = document.getElementById("7");
let sound8 = document.getElementById("8");

// x`

document.addEventListener("keydown",function(e){
  let num = e.keyCode
  if(num == 65){
    sound1.play()   
    sound1.currentTime = 0
    document.getElementById("a").classList.toggle("press")
  

      }else if(num === 83){
        sound2.play()
        sound2.currentTime = 0
        document.getElementById("s").classList.toggle("press")

      }
      else if( num=== 68){
        sound3.play()
        sound3.currentTime = 0
        document.getElementById("d").classList.toggle("press")

      }
      else if(num === 70){
        sound4.play()
        sound4.currentTime = 0
        document.getElementById("f").classList.toggle("press")

      }
      else if(num === 71){
        sound5.play()
        sound5.currentTime = 0
        document.getElementById("g").classList.toggle("press")

      } 
      else if(num === 72){
        sound6.play()
        sound6.currentTime = 0
        document.getElementById("h").classList.toggle("press")

      } 
      else if(num === 74){
        sound7.play()
        sound7.currentTime = 0
        document.getElementById("j").classList.toggle("press")

      } 
      else if(num === 75){
        sound8.play()
        sound8.currentTime = 0
        document.getElementById("k").classList.toggle("press")

      } 
      
})