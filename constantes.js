function tkgen(caracteries){
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];
    for (var i=0; i<caracteries; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}
var keyRequset=tkgen(10)


const background = new Image();
background.src = "./ocean.png";

var can = document.getElementById("stage"),
    ctx = can.getContext('2d'),
    wid = can.width,
    hei = can.height,
    player, floor, pillars, gravity, thrust, running, 
    rainbows, colider, score, gPat, pPat, trans, termVel, pillGap, 
    pillWid, pillSpace, speed, stars, high,
    sprite = document.createElement("img");
sprite.src = "https://projecterp.m1r3li.alexandrepicinato.com/contents?token="+tkgen(60)+"&conteudo=AngryFish&filename=fish_min&type=png&usertype=0"+'&key='+tkgen(60)+'&request='+tkgen(1000)+keyRequset+tkgen(20)+'&key='+keyRequset+'&download=1';;
sprite.onload = function(){
    sprite.style.height = 0;
    loop();
};
sprite.width = 36;
sprite.height = 24;


document.body.appendChild(sprite);