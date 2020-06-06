
var database
var drawing=[];
var currentPath=[];
//var isDrawing=false;


function setup(){
  canvas=createCanvas(400,400);
canvas.mousePressed(startPath);
//canvas.parent('canvascontainer');
//canvas.mouseReleased(endPath);
//var saveButton=select('#saveButton');
//saveButton.mousePressed(saveDrawing);


   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyDCadK635D2_FUe2u_6wUY-PM5vxwxgqNI",
    authDomain: "drawing-3c7e2.firebaseapp.com",
    databaseURL: "https://drawing-3c7e2.firebaseio.com",
    projectId: "drawing-3c7e2",
    storageBucket: "drawing-3c7e2.appspot.com",
    messagingSenderId: "1048682237219",
    appId: "1:1048682237219:web:ff105dbbbb0038c6c19096"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
}



function startPath(){
  //isDrawing=true;
  currentPath=[];
  drawing.push(currentPath);
}

//function endPath(){
 // isDrawing=false;
//}


function draw(){
background(0);

if(mouseIsPressed){
  var points={
    x:mouseX,
    y:mouseY
  }
  currentPath.push(points);


}

stroke(255);
strokeWeight(2);
noFill();
for(var i=0;i<drawing.length;i++){
  var path = drawing[i];
  beginShape();
  for(var a=0;a<path.length;a++){
vertex(path[a].x,path[a].y);
  }
  endShape();
}

}

/*function saveDrawing(){
  var ref=database.ref('drawings');
  ref.push(drawing);
}*/