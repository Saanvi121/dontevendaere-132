status = ""

function preload()
{
    img1 = loadImage('bedroom.jpg')
}

function setup()
{
    canvas = createCanvas(575, 350)
    canvas.position(450,250)
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("bedstat").innerHTML = "Status: Detecting Objects"
}

function modelLoaded()
{
  console.log("Model Loaded")
  status = true;
  objectDetector.detect(img1, gotResult);
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
    image(img1, 0,0,575, 350)
}