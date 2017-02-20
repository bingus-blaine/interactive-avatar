//This took me a ridiculous amount of time, but I loved all of it!!! Making the arm move was very difficult, 
//and I had to make a variable for prety much every coordinate. I want to make the monster eat little pellets 
//and change form, but I got caught up on the arm. 
function setup() {
createCanvas(1300, 700);
}

function draw() {
    background(230);
    
    
//VARIABLES
//rhand 

var rh1 = 120
var rh2 = 500
var rp1 = 112
var rp2 = 513
var rm1 = 117
var rm2 = 517
var rr1 = 122
var rr2 = 518
var rl1 = 128
var rl2 = 514

//right arm

var wrist1x = 110
var wrist2x = 130
var wrist1y = 490
var wrist2y = 488
var elbox = 140
var elboy = 410

//left arm
    
var ex = 360
var ey = 420
var EX = 353
var EY = 443

var wx = 445
var wy = 435
var WX = 443
var WY = 452

var armpit = 260
var armpity = 380

//left hand

var thumb = 450
var fingers = 458
var palm = 449

//leash

var palmy = 443
var leashy = 430
var finger1 = 443
var finger2 = 452
var finger3 = 448
var finger4 = 438
var thumby = 438

var leash = 452
var connector1 = 460
var connector2 = 457
 var connectory1 = 430
 var connectory2 = 433
 
var palmy = 443
var leashy = 430
var finger1 = 443
var finger2 = 452
var finger3 = 448
var finger4 = 438
var thumby = 438

//
var t1x = 129
var t1y = 490
var t2x = 140
var t2y = 505
var t3x = 138
var t3y = 506
var t4x = 127
var t4y = 496


        if(mouseX<448){
            ex = mouseX-88;
            EX = mouseX-95;
            wx = mouseX-3;
            WX = mouseX-5;
            thumb = mouseX;
            palm = mouseX;
            fingers = mouseX+10;
            leash = mouseX+2;
            connector1 = mouseX+5;
            connector2 = mouseX+10;
                } 
    ////////////////////////////
        if(mouseX<348){
             ex = mouseX-88;
            EX = mouseX-95;
            wx = mouseX-3;
            WX = mouseX-5;
            ex = 260;
            EX = 253;
            wx = 345;
            WX = 343;
            thumb = 350;
            fingers = 358;
            palm = 349;
            connector1 = 360;
            connector2 = 357;
            leash = 352;
        }
    ///////////////////////////
       if(mouseX<400){
                armpit = mouseX-130;
                    } else{
                    armpit = 260;
                    }
    ////////////////////////////
        if(mouseX<348) {
            armpit = 160;
        }
    //////////////////////////////
        if(mouseY<300){
            wy = mouseY+135;
            WY = mouseY+152;
            palmy = mouseY+143;
            leashy = mouseY+130;
            finger1 = mouseY+143;
            finger2 = mouseY+152;
            finger3 = mouseY+148;
            finger4 = mouseY+138;
            thumby = mouseY+138;
            connectory1 = mouseY+130;
            connectory2 = mouseY+133;
        }
                if(mouseY<245){
                   ey = mouseY+175;
                    EY = mouseY+198;
        
                   }
    /////////////////////////////////////////
                if(mouseY>505){
                    wy = mouseY-70;
                    WY = mouseY-53;
                    palmy = mouseY-62;
                    leashy = mouseY-75;
                    finger1 = mouseY-62;
                    finger2 = mouseY-53;
                    finger3 = mouseY-57;
                    finger4 = mouseY-67;
                    thumby = mouseY-67;
                    connectory1 = mouseY-75;
                    connectory2 = mouseY-72;
                }

                if(mouseY>550){
                    wy = 480;
                    WY = 497;
                    palmy = 488;
                    leashy = 475;
                    finger1 = 488;
                    finger2 = 497;
                    finger3 = 493;
                    finger4 = 483;
                    thumby = 483;
                    connectory1 = 475;
                    connectory2 = 478;
                }
 ///////////////////////////////////////////////////////////////
                if(mouseY<160){
                    ey = 335;
                    EY = 358;
                     wy = 295;
                    WY = 312;
                    palmy = 303;
                    leashy = 290;
                    finger1 = 303;
                    finger2 = 312;
                    finger3 = 308;
                    finger4 = 298;
                    thumby = 298;
                    connectory1 = 290;
                    connectory2 = 293;
                }
    
    //////////////////////////////////////////////////////////
    
            if(mouseIsPressed &&
                mouseX>140 &&
                mouseX<200 &&
                mouseY>410 &&
                mouseY<480){
                
                wrist1x = mouseX-20;
                wrist2x = mouseX;
                wrist1y = 485;
                wrist2y = 483;
                rh1 = mouseX-10;
                rh2 = rh2-5;
                rp1 = mouseX-15;
                rp2 = rp2-5;
                rm1 = mouseX-11;
                rm2 = rm2-5;
                rr1 = mouseX-7;
                rr2 = rr2-5;
                rl1 = mouseX-2;
                rl2 = rl2-5;
                t1x = mouseX;
                t1y = t1y-2;
                t2x = mouseX+2;
                t2y = t2y-7;
                t3x = mouseX+10;
                t3y = t3y-5;
                t4x = mouseX+2;
                t4y = t4y-7;
            }
               ///////////////////////////////////////////
                //elbow function
                    if(mouseIsPressed &&
                        mouseY>410 &&
                        mouseY<480 &&
                        mouseX<200 &&
                        mouseX>179){
                        elbox = mouseX-30;
               
            }
                    if(mouseIsPressed &&
                        mouseY>410 &&
                        mouseY<480 &&
                        mouseX<180 &&
                        mouseX>140){
                        elbox = 150;
                    }
  

    
// LHand
    fill(13, 44, 105);
    ellipse(palm, palmy, 35, 20); //palm
    fill(88, 13, 13);
    rect(leash, leashy, 8, 25);//leash
    fill(13, 44, 105);
    ellipse(fingers, finger1, 18, 5); //fingers
    ellipse(fingers, finger2, 15, 4);
    ellipse(fingers, finger3, 18, 5);
    ellipse(fingers, finger4, 18, 5);
    ellipse(thumb, thumby, 5, 15);
    
//LeftArm
    fill(0);
    beginShape();
    vertex(260, 350); //shoulder
    vertex(ex, ey); //elbow
    vertex(wx, wy); //wrist
    vertex(WX, WY); //wrist
    vertex(EX, EY); //elbow
    vertex(armpit, armpity); //armpit
    endShape(0);  
    


    //body
    fill(0);
    ellipse(250, 450, 150, 200);
    ellipse(260, 480, 155, 150);

//rightleg
 fill(0);
    beginShape();
    vertex(210, 518);
    vertex(225, 600);
    vertex(210, 665);
    vertex(225, 668);
    vertex(240, 600);
    vertex(237, 518);
    endShape();
    
//leftleg
    fill(0);
    beginShape();
    vertex(280, 518);
    vertex(300, 590);
    vertex(290, 655);
    vertex(303, 655);
    vertex(315, 590);
    vertex(306, 518);
    endShape();
    
//leftfoot
    beginShape();
    fill(80);
    quad(210, 663, 223, 663, 240, 680, 210, 680);
    endShape();
//rightfoot
    beginShape();
    fill(80);
    quad(290, 655, 303, 655, 320, 672, 290, 672);
fill(162, 92, 31);
    rect(mouseX-32, mouseY+15, 20.5, 60); //798, 615
    ellipse(mouseX-22, mouseY+73, 20, 20); //808, 673
    //backfrontlegs
    ellipse(mouseX+18, mouseY+74, 21, 21);
    rect(mouseX+8, mouseY+42, 20, 35); 
    noStroke();
    ellipse(mouseX+18, mouseY+74, 20, 20);
    rect(mouseX-32, mouseY+15, 20, 60);
    stroke(1);
//outline
    rect(mouseX-8, mouseY+45, 21, 35);
    ellipse(mouseX+3, mouseY+76, 21, 21);

        fill(162, 92, 31);
    ellipse(mouseX, mouseY, 123, 103);
    ellipse(mouseX-40, mouseY+73, 22, 22)
    rect(mouseX-52, mouseY+15, 23, 60);
//realmonster
    noStroke();
        fill(185, 107, 38);
    ellipse(mouseX, mouseY, 120, 100); //830, 600
    fill(100, 6, 6);
    ellipse(mouseX+15, mouseY, 105, 80);
//monsterbod
    fill(185, 107, 38);
    rect(mouseX-50, mouseY+25, 20, 50);
    ellipse(mouseX-40, mouseY+73, 20, 20);
    rect(mouseX-7, mouseY+45, 20, 35);
    ellipse(mouseX+3, mouseY+76, 20, 20);

 
 //leash   
    fill(74, 9, 9);
    stroke(1);    
    quad(connector1, connectory1, mouseX, mouseY, mouseX, mouseY, connector2, connectory2);

//monsterhead
    fill(162, 92, 31);
    stroke(1);
    ellipse(mouseX+30, mouseY, 100, 85);
    noStroke();
//monsterface
    fill(240, 154, 154);
    ellipse(mouseX, mouseY+5, 19, 19);
    ellipse(mouseX+75, mouseY+3, 16, 16);
    noStroke();
    stroke(1);
    fill(150, 0, 0);
    ellipse(mouseX, mouseY+5, 15, 15);
    ellipse(mouseX+75, mouseY+3, 12, 12);
    noStroke();
    fill(255);
    ellipse(mouseX-3, mouseY+3, 3, 5);
    ellipse(mouseX+73, mouseY, 2, 4);

    
//monstermouth
    stroke(1);
    triangle(mouseX+30, mouseY+17, mouseX+40, mouseY+15, mouseX+35, mouseY+27);
    triangle(mouseX+40, mouseY+15, mouseX+49, mouseY+16, mouseX+45, mouseY+27);
    triangle(mouseX+21, mouseY+21, mouseX+30, mouseY+17, mouseX+26, mouseY+27);
    triangle(mouseX+49, mouseY+16, mouseX+56, mouseY+18, mouseX+53, mouseY+26);
//bottomteeth
    triangle(mouseX+26, mouseY+27, mouseX+30, mouseY+17, mouseX+35, mouseY+27);
    triangle(mouseX+35, mouseY+27, mouseX+40, mouseY+15, mouseX+45, mouseY+27);
    triangle(mouseX+45, mouseY+27, mouseX+49, mouseY+16, mouseX+53, mouseY+26);
    
        ///////////////////////////////////////////////////////////////////////
                        if(mouseIsPressed){
                            fill(0);
                            ellipse(mouseX+39, mouseY+21, 36, 18);
                            stroke(1);
                            fill(250);
                            triangle(mouseX+30, mouseY+13, mouseX+40, mouseY+12, mouseX+35, mouseY+20);
                            triangle(mouseX+40, mouseY+12, mouseX+49, mouseY+13, mouseX+45, mouseY+20);
                            triangle(mouseX+23, mouseY+16, mouseX+30, mouseY+13, mouseX+26, mouseY+23);
                            triangle(mouseX+49, mouseY+13, mouseX+56, mouseY+16, mouseX+53, mouseY+22);
        
                            triangle(mouseX+26, mouseY+26, mouseX+30, mouseY+21, mouseX+35, mouseY+29);
                            triangle(mouseX+35, mouseY+29, mouseX+40, mouseY+21, mouseX+45, mouseY+29);
                            triangle(mouseX+45, mouseY+29, mouseX+49, mouseY+21, mouseX+53, mouseY+27);
                          
                            fill(162, 92, 31);
                            noStroke();
                            rect(mouseX-10, mouseY+8, 20, 10);
                            rect(mouseX-10, mouseY-11, 20, 10);
                            rect(mouseX+60, mouseY+6, 17, 8);
                            triangle(mouseX+77, mouseY+12, mouseX+84, mouseY+6, mouseX+77, mouseY+6);
                            rect(mouseX+60, mouseY-9, 17, 8);
                            triangle(mouseX+77, mouseY-9, mouseX+83, mouseY-1, mouseX+77, mouseY-1);
                            stroke(1);
                        }
///////////////////////////////////////////////////////////////////////////

//Rhand
    fill(13, 44, 105);
    ellipse(rh1, rh2, 24, 37);
    ellipse(rp1, rp2, 4, 25); //finger
    ellipse(rm1, rm2, 4, 25);
    ellipse(rr1, rr2, 4, 28);
    ellipse(rl1, rl2, 4, 25);
    beginShape();
    vertex(t1x, t1y);
    vertex(t2x, t2y);
    vertex(t3x, t3y);
    vertex(t4x, t4y);
    endShape();
    noStroke();
    ellipse(rh1, rh2, 23, 35); //palm
    stroke(1);

    
//RightArm
    fill(0);
    beginShape();
    vertex(220, 360);
    vertex(120, 390);
    vertex(wrist1x, wrist1y);
    vertex(wrist2x, wrist2y);
    vertex(elbox, elboy);
    vertex(210, 390);
    endShape();
    
//head
    stroke(1);
    fill(0); //neck
    rect(255, 330, 20, 30);
fill(13, 44, 105); //head
    ellipse(300, 200, 300, 300);
fill(150, 85, 0); //mask
    ellipse(340, 200, 250, 280);
    fill(245, 140, 4);
    ellipse(350, 200, 250, 280);
//eyes
    fill(186, 0, 0);
    ellipse(280, 230, 47, 42);
    ellipse(450, 230, 42, 37);
    fill(0);
    ellipse(280, 230, 40, 35);
    ellipse(450, 230, 35, 30);
    fill(255);
    ellipse(280, 230, 30, 25);
    ellipse(450, 230, 25, 20);
fill(0); //maskstrap
    rect(150, 195, 76, 23);   
fill(0); //teeth
    line(350, 338, 350, 300);
    line(365, 338, 365, 300);
    line(380, 335, 380, 300);
    line(395, 330, 395, 300);

}

   

