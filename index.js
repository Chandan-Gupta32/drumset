var numberofdrumbuttons=document.querySelectorAll(".drum").length;
for (var i=0;i<numberofdrumbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonInnerHTML=this.innerHTML;
makesound(buttonInnerHTML);
    });
}
document.addEventListener("keypress",function(event){
    makesound(event.key)
});
function makesound(key){
    switch(key){
        case "C":
            var audio=new Audio("tom-1.mp3");
            audio.play();
            break;
            case "H":
            var audio=new Audio("tom-2.mp3");
            audio.play();
            break;
            case "A":
            var audio=new Audio("tom-3.mp3");
            audio.play();
            break;
            case "N":
            var audio=new Audio("tom-4.mp3");
            audio.play();
            break;
            case "D":
            var audio=new Audio("crash.mp3");
            audio.play();
            break;
            case "A":
            var audio=new Audio("kick-bass.mp3");
            audio.play();
            break;
            case "N":
            var audio=new Audio("snare.mp3");
            audio.play();
            break;
            default:console.log(buttonInnerHTML);
        }
}
    