var x=Math.floor(Math.random()*6+1);
var s="/images/dice"+x+".png";
document.querySelector(".img1").setAttribute("src",s);

var y=Math.floor(Math.random()*6+1);
var s1="/images/dice"+y+".png";
document.querySelector(".img2").setAttribute("src",s1);

if(x<y){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else if(x>y){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}