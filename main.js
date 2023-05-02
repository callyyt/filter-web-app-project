
noseX=0;
noseY=0;
function preload()
{
    mustach = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}


function setup()
{
    canvas = createCanvas(300,250);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,290);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log(' PoseNet Is Initialized');
}

function draw()
{
    image(video, 0 , 0 ,300, 300);
    image(mustach, noseX, noseY, 30, 30);
}

function take_snapshot()
{
    save('filterimg.png');
}

function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-14;
        noseY = results[0].pose.nose.y-4;
        console.log("nose x=" + noseX);
        console.log("nose y=" + noseY);
    }
}