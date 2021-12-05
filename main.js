function setup() {
video = createCapture(VIDEO);
video.size(550,500);

canvas= createCanvas(550,550);
canvas.position(560,150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw() {
    background('#00ff9f');
    textSize(difference);
    fill('#9999ff')
    text(Ishan, 50 , 400)
}

function modelLoaded() {
    console.log('PoseNet Is Intialized !');
}

difference = 0;
rightWrist = 0;
leftWrist = 0;

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);

        rightWrist = results[0].pose.rightWrist.x;
        leftWrist = results[0].pose.leftWrist.x;
        difference = floor(leftWrist - rightWrist);
    }
    }
    
