var bodyX = 200;
var bodyY = 220;
var bodyW = 112;
var bodyH = bodyW/-2;

draw = function() {
    
    background(207, 254, 255);
    fill(210, 159, 212);
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    ellipse(bodyX, bodyY-70, bodyH, 47); // face?
    
    //eyes
    fill(0, 0, 0);
    ellipse(185,143,9,9);
    ellipse(214,143,9,9);
    
    fill(196, 82, 181);
    ellipse(201,159,29,22);
    
};
