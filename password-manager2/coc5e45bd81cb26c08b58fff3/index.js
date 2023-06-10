const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let onpres= document.getElementById("first")
let secondpres= document.getElementById("second")


function genratePasswords(){
    
    let abc= ""
    let def= ""
    
    for(let i=0;i<15;i++){
        console.log(abc)
          abc += characters[Math.floor(Math.random()*90)]
           def+= characters[Math.floor(Math.random()*90)]
    }
    
    
onpres.innerText= abc 
secondpres.innerText= def

    
} 
