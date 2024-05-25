var x=1;
var y=1;
var z=1;
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
        document.getElementById("acheivments").innerHTML="As a focused and dedicated student, I have honed my problem-solving skills to tackle challenges head-on. My ability to listen and understand has not only enriched my learning experience but also fostered meaningful relationships with peers and mentors. My effective communication skills have been instrumental in expressing my ideas clearly and persuasively, contributing to successful team projects and presentations. In addition to this, I possess many positive qualities that set me apart. I am adaptable, resilient, and always eager to learn. My continuous improvement allows me to adapt to many situations. Whether it’s academic pursuits or extracurricular activities, I bring a level of enthusiasm and dedication that transforms every opportunity into a stepping stone for future success.";
        document.getElementById("acheivments").className="border";
        document.getElementById("salmon").style.color="white";
        y=0;
    }
    else{
        document.getElementById("acheivments").style.visibility="hidden";
        document.getElementById("acheivments").className="none";
        document.getElementById("acheivments").innerHTML="About Me;
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
