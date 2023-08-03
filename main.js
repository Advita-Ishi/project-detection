
status1 = "";

function preload() {

}

function setup() {
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
    console.log("Model is Loaded!");
    status1 = true;
    objectDetector.detect(img, gotResult);  
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
image(img, 0, 0, 600, 400);
fill("#FF0000");
text("dog", 80, 70)
noFill();
stroke("#FF0000");
rect(70, 60, 350, 300);

fill("#355E3B");
text("bowl", 270, 300);
noFill();
stroke("#355E3B");
rect(265, 290, 100, 100);

fill("#0000ff");
text("cat", 330, 90);
noFill();
stroke("#0000ff");
rect(290, 70, 300, 300);

}

function bedroom() {
    window.location = 'bedroom.html'
}

function living() {
    window.location = 'livingroom.html'
}

function tv() {
    window.location = 'tv.html'
}

function desk() {
    window.location = 'desk.html'
}

function fruitbasket() {
    window.location = 'fruits.html'
}