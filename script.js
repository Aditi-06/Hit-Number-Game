var timmer=60
var hitrn=0
var score=0

function scorern(){
    score +=10;
    document.querySelector("#scrn").textContent=score;
}
function hitrun(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}
function makebubble(){
    var clutter=""

for(var i=1;i<=85;i++){
    var rn=Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pb").innerHTML=clutter;
}

function runtimmer(){
    var ti=setInterval(function(){
        if(timmer>0){
            timmer--;
        document.querySelector("#time").textContent=timmer;
        }
        else{
            clearInterval(ti);
            document.querySelector("#pb").innerHTML=`<h1>your Score is ${score}</h1>`;
        }
    },1000);
}

document.querySelector("#pb").addEventListener("click",function(details){
    clickednum=Number(details.target.textContent);
    if (clickednum===hitrn){
        scorern();
        makebubble();
        hitrun();
    }
})
makebubble();
runtimmer();
hitrun();
