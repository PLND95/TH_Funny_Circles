function Circle(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function getRandomHex(){
    return Math.floor(Math.random() * 255);
}
function getRandomColor(){
    let red = getRandomHex();
    let blue = getRandomHex();
    let green = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}

function createCircle(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let radius = Math.floor(Math.random()*120)+10;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let circle = new Circle(x,y,radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);

    let circleColor = getRandomColor();
    ctx.fillStyle = circleColor;
    ctx.fill();

}


function drawCircles(){
    for(let i = 0; i<=10; i++){
        createCircle();
    }
}
//Tại sao phải chạy hàm drawCircles ngoài này, thì trong setInterval gọi mới chạy??? 
drawCircles();

setInterval(function(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCircles();
},1500);
