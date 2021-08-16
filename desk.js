status = ""

function preload()
{
    img2= loadImage('desk.jpg')
}

function setup()
{
    canvas = createCanvas(575, 350)
    canvas.position(450,250)
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("deskstat").innerHTML = "Status: Detecting Objects"
}

function modelLoaded()
{
  console.log("Model Loaded")
  status = true;
  objectDetector.detect(img2, gotResult);
}

function gotResult(error, results)
{
  if (error)
  {
    console.log(error);
  }
  console.log(results);
}

function draw()
{
    image(img2, 0,0,575, 350)
}