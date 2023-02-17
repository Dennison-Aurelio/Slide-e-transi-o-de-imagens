let count = 1;
document.getElementById("radio1").checked = true;
   
setInterval( function(){
nextImage();
}, 7000 )   /*quantidade de segundo que ira passar automaticamente*/

function nextImage() {
    count++;
    if(count>5){ /*quantidade de imagens que tiver no slide*/
    count = 1;
}

document.getElementById("radio"+count).checked = true;

}