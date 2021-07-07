Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");

var mouseEvent="empty";
var last_position_x, last_position_y;
colour="black";
line_width=1;

Canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent="mousedown";
}

Canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}

Canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

Canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
current_position_x=e.clientX-Canvas.offsetLeft;
current_position_y=e.clientY-Canvas.offsetTop;

if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=line_width;

    ctx.arc(current_position_x, current_position_y, 40, 0, 2*Math.PI);
    ctx.stroke();
}

}