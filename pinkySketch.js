var w = window.innerWidth;
var h = window.innerHeight;

var level1 = [
  [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2],
  [2, 4, 0, 3, 0, 0, 0, 1, 2, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2],
  [2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 5, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 1, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 6, 0, 0, 0, 0, 0, 0, 9, 0, 1, 2, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 1, 10, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 1, 2, 1, 1, 1, 10, 1, 1, 1, 1, 0, 0, 2, 7, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 1, 2],

]

var level2 = [
  [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 5, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2],
  [2, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 1, 1, 10, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0, 6, 1, 2, 4, 1, 1, 10, 1, 8, 1, 1, 1, 1, 0, 7, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],

]

var level3 = [
  [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 5, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2],
  [2, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 1, 1, 10, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0, 6, 1, 2, 4, 1, 1, 10, 1, 8, 1, 1, 1, 1, 0, 7, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],

]

var level4 = [
  [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 5, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2],
  [2, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 1, 1, 10, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0, 6, 1, 2, 4, 1, 1, 10, 1, 8, 1, 1, 1, 1, 0, 7, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],

]
var levels = [level1, level2, level3, level4];
let pantalla = 0;

function preload() {
  player_image = loadImage("images/flamingo.png")
  player_injured_image = loadImage("images/flamingo.png")
  tiles_image = loadImage("images/tilesFlamingo.png")
  jump_image = loadImage("images/jump.png")
  touchpad_image = loadImage("images/touchpad.png")
  instruction = loadImage("images/tutorial.png")
}

function setup() {
  canvas = createCanvas(w, h);

  map1 = new Map(levels)
  player = new Player()
  player_injured_image.filter(THRESHOLD)
  

}

function FullScreenSupportEnabled() {
  return (document.fullscreenEnabled || 
          document.webkitFullscreenEnabled || 
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled);
}

window.onresize = function () {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.size(w, h);
}

function draw() {
  switch (pantalla) {
    case 0:
      imageMode(CENTER);
      background(204,189,134,20);
      image(instruction,width/2,height/2);
      break;
    case 1:
      background(210, 255, 200);
      imageMode(CORNER);
      map1.draw()
      //image(jump_image, h - (h/6), w - (w/10));
      //console.log(h + " and " + w);
      player.draw()
      player.update(w, h)
      if (h >= 280 && h < 360 && w >= 653 && w < 740) {
        image(touchpad_image, parseInt(w / 10), parseInt(h - (h / 3)), 150, 50);
        image(jump_image, parseInt(w - (w / 4)), parseInt(h - (h / 2.5)), 75, 75);
      } else if (h >= 360 && h < 600 && w >= 740 && w < 1024) {
        image(touchpad_image, parseInt(w / 10), parseInt(h - (h / 3)));
        image(jump_image, parseInt(w - (w / 5)), parseInt(h - (h / 2)));
      } else if (h >= 600 && h < 800 && w >= 1024 && w < 1280) {
        image(touchpad_image, parseInt(w / 10), parseInt(h - (h / 4)));
        image(jump_image, parseInt(w - (w / 5)), parseInt(h - (h / 3)));
      } else {
        image(touchpad_image, parseInt(w / 10), parseInt(h - (h / 5)));
        image(jump_image, parseInt(w - (w / 5)), parseInt(h - (h / 4)));
      }
      break;
  }
}

function touchStarted() {
  player.processInput(w,h);
}

function mouseClicked() {
  switch (pantalla) {
    case 0:
      pantalla ++;
      document.documentElement.requestFullscreen();
      break;
    case 1:
      break;
  //console.log(mouseX,mouseY);
  //118sketch.js:123 414 and 896
  //player.updateMove(w,h)
  //280 a 360 y 653 a 740
  /* if(h >= 280 && h < 360 && w >= 653 && w < 740 && //Dependiendo del tamaño del celular
   mouseX >= w / 10 && mouseX < w / 10 + 74 && mouseY >= h - (h / 3) && mouseY < h - (h / 3) + 74 ){ //mouseclicked
   console.log("touched left");
 }
 if(h >= 280 && h < 360 && w >= 653 && w < 740 && //Dependiendo del tamaño del celular
   mouseX >= (w / 10) + (74*2) && mouseX < (w / 10) + (74*3) && mouseY >= h - (h / 3) && mouseY < h - (h / 3) + 74 ){ //mouseclicked
   console.log("touched right");
 }
 if(h >= 280 && h < 360 && w >= 653 && w < 740 && //Dependiendo del tamaño del celular
 mouseX >= (w - (w / 5)) && mouseX < (w - (w / 5)) + 142 && mouseY >= (h - (h / 2.5)) && mouseY < (h - (h / 2.5)) + 142 ){ //mouseclicked
 console.log("touched jump");
 }
  //360 a 600 y 740 a 1024
  if(h >= 360 && h < 600 && w >= 740 && w < 1024 && //Dependiendo del tamaño del celular
    mouseX >= w / 10 && mouseX < w / 10 + 74 && mouseY >= h - (h / 3) && mouseY < h - (h / 3) + 74 ){ //mouseclicked
    console.log("touched left");
  }
  if(h >= 360 && h < 600 && w >= 740 && w < 1024 && //Dependiendo del tamaño del celular
    mouseX >= (w / 10) + (74*2) && mouseX < (w / 10) + (74*3) && mouseY >= h - (h / 3) && mouseY < h - (h / 3) + 74 ){ //mouseclicked
    console.log("touched right");
  }
  if(h >= 360 && h < 600 && w >= 740 && w < 1024 && //Dependiendo del tamaño del celular
  mouseX >= (w - (w / 5)) && mouseX < (w - (w / 5)) + 142 && mouseY >= (h - (h / 2)) && mouseY < (h - (h / 2)) + 142 ){ //mouseclicked
  console.log("touched jump");
  }
  //600 a 800 y 1024 a 1280
  if(h >= 600 && h < 800 && w >= 1024 && w < 1280 && //Dependiendo del tamaño del celular
    mouseX >= w / 10 && mouseX < w / 10 + 74 && mouseY >= h - (h / 4) && mouseY < h - (h / 4) + 74 ){ //mouseclicked
    console.log("touched left");
  }
  if(h >= 600 && h < 800 && w >= 1024 && w < 1280 && //Dependiendo del tamaño del celular
    mouseX >= (w / 10) + (74*2) && mouseX < (w / 10) + (74*3) && mouseY >= h - (h / 4) && mouseY < h - (h / 4) + 74 ){ //mouseclicked
    console.log("touched right");
  }
  if(h >= 600 && h < 800 && w >= 1024 && w < 1280 && //Dependiendo del tamaño del celular
  mouseX >= (w - (w / 5)) && mouseX < (w - (w / 5)) + 142 && mouseY >= (h - (h / 3)) && mouseY < (h - (h / 3)) + 142 ){ //mouseclicked
  console.log("touched jump");
  }*/
  //console.log((w / 10),h - (h / 3));
  }
}