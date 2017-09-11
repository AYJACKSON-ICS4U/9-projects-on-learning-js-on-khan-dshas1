var xPos = 50;
var yPos = 300;
var rectX= 16;
var rectY= 312;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 30, 30);
    
    fill(255, 115, 0);
    rect(rectX,rectY,15,15);
    
    xPos+=10;
    yPos-=10;
    rectX+=10;
    rectY-=10;
};
