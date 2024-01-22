var x=0;
var y=0;
var z=0
function Function(){
    x=x+1
    if (x==2){
        document.getElementById("attribute").style.visibility="visible";
        document.getElementById("attribute").className="border";
        document.getElementById("attribute").innerHTML="I have made a lot of programs, in python and html. [Add more acheivments here later]";
        document.getElementById("anchovies").style.color="white";
        x=0;
    }
    else{
        document.getElementById("attribute").style.visibility="hidden";
        document.getElementById("attribute").className="none";
        document.getElementById("attribute").innerHTML="Strength, Quality, and Acheivments";
        document.getElementById("anchovies").style.color="rgb(0, 151, 0)";
    }
}
function funkytion(){
    y=y+1
    if (y==2){
        document.getElementById("acheivments").style.visibility="visible";
        document.getElementById("acheivments").innerHTML="Nice";
        document.getElementById("acheivments").className="border";
        document.getElementById("salmon").style.color="white";
        y=0;
    }
    else{
        document.getElementById("acheivments").style.visibility="hidden";
        document.getElementById("acheivments").className="none";
        document.getElementById("acheivments").innerHTML="Positive Attributes";
        document.getElementById("salmon").style.color="rgb(0, 151, 0)";
    }
}
function funktion(){
    z=z+1
    if (z==2){
        document.getElementById("image").style.visibility="visible"
        document.getElementById("cod").style.color="white";
        z=0;
    }
    else{
        document.getElementById("image").style.visibility="hidden";
        document.getElementById("cod").style.color="rgb(0 ,151, 0)";
    }
}