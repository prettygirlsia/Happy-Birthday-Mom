var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 <canvas width="600" height="400" id="myCanvas"></canvas>
function new_image()
{
fabric.image.fromURL("BirthdayImage.jpg"),function (Img){	
    block_image_object=Img;

    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeight(510);
    block_image_object.set({
        top:0,
        left:0
    });
    canvas.add(block_image_object);
    });
}