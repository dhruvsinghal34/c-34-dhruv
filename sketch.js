var ball;
var database;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
    var childNodRef=database.ref('ball/position');
    childNodRef.on("value",function(data){
        var position=data.val();
        ball.x=position.x;
        ball.y=position.y;
    });
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x1,y1){
var childNodRef1=database.ref('ball/position') ;
childNodRef1.set({
    x:ball.x+x1,
    y:ball.y+y1
});
}
