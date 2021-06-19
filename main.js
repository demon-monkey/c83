canvas=document.getElementById("mycan");
ctx=canvas.getContext("2d");
var last_x,last_y;
color="";
width="3";
if(screen.width<992){
    document.getElementById("my_can").width=screen.width-50;
    document.getElementById("my_can").height=screen.height-300;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(event){


color=document.getElementById("colorcode").value;
width=document.getElementById("wid").value;
last_x=event.touches[0].clientX-canvas.offsetLeft;
last_y=event.touches[0].clientY-canvas.offsetTop;

}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){
    current_x=e.touches[0].clientX-canvas.offsetLeft;
    current_y=e.touches[0].clientY-canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    
    last_x=current_x;
    last_y=current_y;
}

function clear_canvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}