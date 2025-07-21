var fighterImg = document.getElementById("fighter");

var standPose = "char-1.gif";        

var crouchPose = "crouch-pose.gif";  

var fighterLeft = 80; 

document.addEventListener("keydown", function(event) {


    if (event.code === "ArrowDown") {
        fighterImg.src = crouchPose;
    }

    if (event.code === "ArrowRight") {
        fighterLeft += 20; 
        if (fighterLeft > 700) fighterLeft = 700; 
        fighterImg.style.left = fighterLeft + "px";
    }

    if (event.code === "ArrowLeft") {
        fighterLeft += -20; 
        if (fighterLeft < 0) fighterLeft = 0; 
        fighterImg.style.left = fighterLeft + "px";
      }
    });
    
document.addEventListener("keyup", function(event) {
    if (event.code === "ArrowDown") {
        fighterImg.src = standPose; 
    }
});

