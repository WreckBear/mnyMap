
function start(){
    var canvas = document.createElement("canvas");
    document.getElementsByTagName("body")[0].appendChild(canvas);
    var context =  canvas.getContext("2d");
    paint_line(context,50,40,2000,40);
    paint_circle(context,30,30,20);
}

function paint_circle(ctx,pointx,pointy,size){
    ctx.fillRect(pointx, pointy, size, size);
}

function paint_line(ctx,srcx,srcy,tgetx,tgety){
    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.strokeStyle="red"; // 红色路径
    ctx.moveTo(srcx,srcy);
    ctx.lineTo(tgetx,tgety);
    ctx.stroke(); // 进行绘制
}