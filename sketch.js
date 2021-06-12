
var balloon;
var database;
var position;
var balloonImg1,balloonImg2, balloonImg3, balloonImg4;


function preload(){
    bg =loadImage("images/Hot Air Ballon-01.png");
    balloonImg2 = loadImage("images/Hot Air Ballon-02.png")
    balloonImg3 = loadImage("images/Hot Air Ballon-03.png")
    balloonImg4 = loadImage("images/Hot Air Ballon-04.png")
}


function setup(){
    createCanvas(500,500);
    database = firebase.database();
    balloon = createSprite(250,250,10,10);

    balloon.addAnimation("Hot Air balloon", balloonImg2);
    balloon.scale = 0.5;

    
   
    var balloonposition = database.ref('balloon/position');
    balloonposition.on('value',readheight,showerror);
}

function draw(){
    background(bg);
    
        

        if(keyDown(UP_ARROW)){
            updateHeight(0,-10);
            balloon.addAnimation("hotAitballoon", balloonImg2);
            balloon.scale = balloon.scale -0.01;
        }
        if(keyDown(DOWN_ARROW)){
            updateHeight(0,10);
            balloon.addAnimation("hotAitballoon", balloonImg3);
            balloon.scale = balloon.scale -0.01;
        }
        if(keyDown(RIGHT_ARROW)){
            updateHeight(10, 0);
            balloon.addAnimation("hotAitballoon", balloonImg4);
            balloon.scale = balloon.scale -0.01;
        }
        if(keyDown(LEFT_ARROW)){
            updateHeight(-10, 0);
            balloon.addAnimation("hotAitballoon", balloonImg2);
            balloon.scale = balloon.scale -0.01;
        }
        

        drawSprites();

    
}

function updateHeight(x,y){
    database.ref('balloon/position').set({
        'x':height.x + x,
        'y':height.y + y
    })

}

function readheight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showerror(){
  console.log("error in writing to the database")
}


