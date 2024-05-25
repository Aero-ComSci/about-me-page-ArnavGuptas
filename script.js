var x=1;
var y=1;
var z=1;
var r=1;
function Function(){
    x=x+1
    if (x==2){
        document.getElementById("attribute").style.visibility="visible";
        document.getElementById("attribute").className="border";
        document.getElementById("attribute").innerHTML="I work well in a team with other people, but can also work alone. I can also take charge of and lead a team if I need to. I have written a lot of programs, such as hangman, and many other games. I am a hard worker, and can work very focused. I can also get a lot of work done in a short time if I need to. I am usually pretty quiet, but can still communicate with others if it is needed.";
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
        document.getElementById("acheivments").innerHTML="In my career, I hope to get a stable job that has good pay and is engaging. I want to be able to lead, or be part of, a team that can do something that has an impact. In school, i want to try and graduate and get into a good university in order to understand computer science concepts better.";
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
funciton sad(){
    r=r+1
    if (r==2){
        document.getElementById("portfo").style.visibility="visible";
        document.getElementById("portfo").className="border";
        document.getElementById("pdf").style.color="white";
        r=0;
    }
    else{
        document.getElementById("portfo").style.visibility="hidden";
        document.getElementById("portfo").className="none";
        document.getElementById("portfo").innerHTML="Resume";
        document.getElementById("pdf").style.color="rgb(0, 151, 0)";
    }
}
