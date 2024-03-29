class Player {

  constructor() {
    this.pos = createVector(200, map1.yoffset + 5000);
    this.velocity = createVector(0, 0);
    this.gravity = 10;
    this.spriteSize = 96;
    this.size = 50;
    this.injured = false;
    this.injuryTimer = 0;
    this.animationTimer = 0;
    this.lives = 2;
    this.keys = 0;
    this.movingState = 0;
    this.endingMessage = "GAME OVER!";
    this.gameOverPlayer = false;

  }

  updateMove(w, h) {
    this.processInput(w, h);
  }

  update(w, h) {
    // check if player is still alive?
    if (this.isAlive()) {
      // check to see if currently injured
      this.updateInjured();

      // check for enemy contact
      if (this.touchingEnemy()) {
        this.injured = true;
        if (this.injuryTimer == 0)
          this.lives--;
      }

      if (mouseIsPressed) {
        this.processInput(w, h);
      }

      // check for item contact
      this.touchingItem();

      // update player Y movement based on velocity
      this.pos.add(this.velocity);
      this.updateVelocity();
      // check for Input to move or jump...


      this.updateOffsets()

      // update animation timer
      this.animationTimer++;
      if (this.animationTimer > 120) this.animationTimer = 0;
    } else {
      //die and stuff...
      textSize(44);
      fill("white");
      text(this.endingMessage, 200, 200);
      location.reload();
      alert("Has perdido, vuelve a intentarlo recargando la página");
      //window.open("http://localhost:{127.0.0.1:5500}/index.html", "_self");
      //window.open("D:\Desktop\Coigoysusamigos\coigoysusamigos\gameover.html", "_self");
      //window.open("http://localhost:{127.0.0.1:5500}/gameover.html", "_self");
      //http://localhost:{your-port-num}/empty-example
      // this.playSound(loseSound);
    }
  }

  updateOffsets() {
    // l(this.pos.y - map1.yOffset);
    if (this.pos.y - map1.yOffset < (height / 5))
      map1.yOffset -= 5;
    if (this.pos.y - map1.yOffset > (height - 200))
      map1.yOffset += 10;
  }


  collectItem(item) {
    if (map1.itemList[item].type == "heart") {
      // remove item from map
      map1.blocks[map1.itemList[item].pos.y / 50][map1.itemList[item].pos.x / 50] = 0;
      // increase heartcount & remove item from map's itemList
      this.lives++;
      map1.itemList.splice(item, 1);
      // play collect heart sound

    } else if (map1.itemList[item].type == "key") {
      // remove item from map
      map1.blocks[map1.itemList[item].pos.y / 50][map1.itemList[item].pos.x / 50] = 0;
      // increase keycount & remove item from map's itemList
      this.keys++;
      map1.itemList.splice(item, 1);
      // play unlock door sound

    } else if (map1.itemList[item].type == "door") {
      // switch to the next level!!!!!
      if (this.keys > 0) {
        if (map1.currentLevel < map1.levelList.length - 1) {
          window.open("https://www.figma.com/proto/ho7KzYfi9CQhG4nho3nUkP/Mascotas-zoo?page-id=3%3A306&node-id=82%3A34&viewport=-520%2C-126%2C0.38&scaling=scale-down&starting-point-node-id=82%3A34");
          alert("GANASTEE!! FELICITACIONES");

          //window.close();

          /*this.lives = 0;
           this.endingMessage = "Level Complete";
           setTimeout(() => {
             this.lives = 2;
             this.keys = 0;
             this.pos = createVector(100, 500);
             map1.changeLevel();
           }, 1500);
         } else {
           this.lives = 0;
           this.endingMessage = "You Win! Game Over!";
           // this.playSound(winSound);*/
        }

      }

    }
  }


  isAlive() {

    if (this.lives > 0) {

      return true
    }
    return false

  }


  touchingEnemy() {
    for (var i = 0; i < map1.enemyList.length; i++) {
      var distance = dist(this.pos.x + map1.offset, this.pos.y, map1.enemyList[i].pos.x, map1.enemyList[i].pos.y)
      if (distance < 40) {
        return true;
      }
    }
    return false;
  }


  touchingItem() {
    for (var i = 0; i < map1.itemList.length; i++) {
      var distance = dist(this.pos.x + map1.offset, this.pos.y, map1.itemList[i].pos.x, map1.itemList[i].pos.y)
      if (distance < 40) {
        this.collectItem(i);
      }
    }

  }



  updateInjured() {
    if (this.injured) {
      if (this.injuryTimer < 150) { // 30 is 1 second
        this.injuryTimer++;
      } else {
        this.injured = false;
        this.injuryTimer = 0;
      }
    }
  }

  onSolid() {
    //checking buttom left
    if (this.getBlockType(0, this.size) == "Solid") {
      this.pos.y = this.getLoc()[1] * 50
      return "bottom"
    }
    //checking buttom right
    if (this.getBlockType(this.size - 1, this.size) == "Solid") {
      this.pos.y = this.getLoc()[1] * 50
      return "bottom"
    }
    //checking top left
    if (this.getBlockType() == "Solid") {
      this.pos.y = this.getLoc()[1] * 50 + 50
      return "top"
    }
    //checking top right
    if (this.getBlockType(this.size - 1, 0) == "Solid") {
      this.pos.y = this.getLoc()[1] * 50 + 50
      return "top"
    }

    return false
  }


  getBlockType(offX = 0, offY = 0) {
    var z = this.getLoc(this.pos.x + offX, this.pos.y + offY)
    return map1.blocks[z[1]][z[0]].constructor.name

  }


  getLoc(x = this.pos.x, y = this.pos.y) {
    var location = [floor((x + map1.offset) / 50), floor(y / 50)]
    return location

  }


  jump() {

    if (!this.isFalling()) {
      this.velocity.y = -28
    }


  }





  updateVelocity() {
    // move player down if they are falling
    if (this.isFalling()) {
      this.pos.add(0, this.gravity);
    }

    if (this.isFalling() && this.onSolid() != "top")
      this.velocity.mult(0.9);
    else if (this.isFalling() && this.onSolid() == "top") {
      this.velocity.y = 0;
    } else
      this.velocity.mult(0);
  }

  isFalling() {
    // check if is in the air
    if (this.onSolid() != "bottom") {
      this.movingState = 1;
      return true;
    } else {
      this.movingState = 0;
      return false;
    }
  }


  processInputKeyboard(keyCode) {
    if (keyIsDown(UP_ARROW)) {
      if (!this.isFalling()) {
        this.velocity.y = -33;
      }
    }
    if (keyIsDown(LEFT_ARROW)) {
      if (this.getBlockType(-1, 0) != "Solid") {
        if (this.pos.x < width / 4)
          map1.offset -= 5;
        else {
          this.pos.x -= 5;
        }
        if (this.animationTimer % 6 == 0) {
          this.movingState = 3;
        } else {
          this.movingState = 2;
        }
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      if (this.getBlockType(50, 0) != "Solid") {
        if (this.pos.x < width / 2.3)
          this.pos.x += 5;
        else {
          map1.offset += 5;
        }
      }
      if (this.animationTimer % 6 == 0) {
        this.movingState = 3;
      } else {
        this.movingState = 2;
      }
    }

    /*switch (keyCode) {
      case UP_ARROW:
        //console.log("JUMP");
        if (!this.isFalling()) {
          this.velocity.y = -33;
        }
        break;
      case LEFT_ARROW:
        //console.log("LEFT");
        if (this.getBlockType(-1, 0) != "Solid") {
          if (this.pos.x < width / 4)
            map1.offset -= 5;
          else {
            this.pos.x -= 5;
          }
        }
        // also update the movingState
        if (this.animationTimer % 6 == 0){
          this.movingState = 3;
        }else {
          this.movingState = 2;
        }
        break;
      case RIGHT_ARROW:
        //console.log("RIGHT");
        if (this.getBlockType(50, 0) != "Solid") {
          if (this.pos.x < width / 4)
            this.pos.x += 5;
          else {
            map1.offset += 5;
          }
        }
        // also update the movingState
        if (this.animationTimer % 6 == 0){
          this.movingState = 3;
        } else{
          this.movingState = 2;
        }
        break;
    }*/

  }


  processInput(w, h) {
    /*if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      if (this.getBlockType(-1, 0) != "Solid") {
        if (this.pos.x < width / 4)
          map1.offset -= 5;
        else {
          this.pos.x -= 5;
        }
      }
      // also update the movingState
      if (this.animationTimer % 6 == 0)
        this.movingState = 3;
      else
        this.movingState = 2;
    }*/


    if (h >= 360 && h < 600 && w >= 740 && w < 1024 && //Dependiendo del tamaño del celular
      mouseX >= w / 10 && mouseX < w / 10 + 74 && mouseY >= h - (h / 3) && mouseY < h - (h / 3) + 74) { //mouseclicked
      console.log("touched left");
      if (this.getBlockType(-1, 0) != "Solid") {
        if (this.pos.x < width / 4)
          map1.offset -= 5;
        else {
          this.pos.x -= 5;
        }
      }
      // also update the movingState
      if (this.animationTimer % 6 == 0)
        this.movingState = 3;
      else
        this.movingState = 2;
    }
    /*if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      if (this.getBlockType(50, 0) != "Solid") {
        if (this.pos.x < width / 2.3)
          this.pos.x += 5;
        else {
          map1.offset += 5;
        }
      }
      // also update the movingState
      if (this.animationTimer % 6 == 0)
        this.movingState = 3;
      else
        this.movingState = 2;
    }*/
    if (h >= 360 && h < 600 && w >= 740 && w < 1024 && //Dependiendo del tamaño del celular
      mouseX >= (w / 10) + (74 * 2) && mouseX < (w / 10) + (74 * 3) && mouseY >= h - (h / 3) && mouseY < h - (h / 3) + 74) { //mouseclicked
      console.log("touched right");
      if (this.getBlockType(50, 0) != "Solid") {
        if (this.pos.x < width / 2.3)
          this.pos.x += 5;
        else {
          map1.offset += 5;
        }
      }
      // also update the movingState
      if (this.animationTimer % 6 == 0)
        this.movingState = 3;
      else
        this.movingState = 2;
    }

    /*if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      if (!this.isFalling()) {
        this.velocity.y = -33;
  
      }
    }*/

    if (h >= 360 && h < 600 && w >= 740 && w < 1024 && //Dependiendo del tamaño del celular
      mouseX >= (w - (w / 5)) && mouseX < (w - (w / 5)) + 142 && mouseY >= (h - (h / 2)) && mouseY < (h - (h / 2)) + 142) { //mouseclicked
      console.log("touched jump");
      if (!this.isFalling()) {
        this.velocity.y = -33;

      }
    }

    //  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    //     l(this.movingState);
    // this.lives++;
    //   }
    if (h >= 280 && h < 360 && w >= 653 && w < 740 && //Dependiendo del tamaño del celular
      mouseX >= w / 10 && mouseX < w / 10 + 74 && mouseY >= h - (h / 3) && mouseY < h - (h / 3) + 74) { //mouseclicked
      console.log("touched left");
      if (this.getBlockType(-1, 0) != "Solid") {
        if (this.pos.x < width / 4)
          map1.offset -= 5;
        else {
          this.pos.x -= 5;
        }
      }
      // also update the movingState
      if (this.animationTimer % 6 == 0)
        this.movingState = 3;
      else
        this.movingState = 2;
    }
    if (h >= 280 && h < 360 && w >= 653 && w < 740 && //Dependiendo del tamaño del celular
      mouseX >= (w / 10) + (74 * 2) && mouseX < (w / 10) + (74 * 3) && mouseY >= h - (h / 3) && mouseY < h - (h / 3) + 74) { //mouseclicked
      console.log("touched right");
      if (this.getBlockType(50, 0) != "Solid") {
        if (this.pos.x < width / 2.3)
          this.pos.x += 5;
        else {
          map1.offset += 5;
        }
      }
      // also update the movingState
      if (this.animationTimer % 6 == 0)
        this.movingState = 3;
      else
        this.movingState = 2;
    }
    if (h >= 280 && h < 360 && w >= 653 && w < 740 && //Dependiendo del tamaño del celular
      mouseX >= (w - (w / 5)) && mouseX < (w - (w / 5)) + 142 && mouseY >= (h - (h / 2.5)) && mouseY < (h - (h / 2.5)) + 142) { //mouseclicked
      console.log("touched jump");
      if (!this.isFalling()) {
        this.velocity.y = -33;

      }
    }
    //600 a 800 y 1024 a 1280
    if (h >= 600 && h < 800 && w >= 1024 && w < 1280 && //Dependiendo del tamaño del celular
      mouseX >= w / 10 && mouseX < w / 10 + 74 && mouseY >= h - (h / 4) && mouseY < h - (h / 4) + 74) { //mouseclicked
      console.log("touched left");
      if (this.getBlockType(-1, 0) != "Solid") {
        if (this.pos.x < width / 4)
          map1.offset -= 5;
        else {
          this.pos.x -= 5;
        }
      }
      // also update the movingState
      if (this.animationTimer % 6 == 0)
        this.movingState = 3;
      else
        this.movingState = 2;
    }
    if (h >= 600 && h < 800 && w >= 1024 && w < 1280 && //Dependiendo del tamaño del celular
      mouseX >= (w / 10) + (74 * 2) && mouseX < (w / 10) + (74 * 3) && mouseY >= h - (h / 4) && mouseY < h - (h / 4) + 74) { //mouseclicked
      console.log("touched right");
      if (this.getBlockType(50, 0) != "Solid") {
        if (this.pos.x < width / 2.3)
          this.pos.x += 5;
        else {
          map1.offset += 5;
        }
      }
      // also update the movingState
      if (this.animationTimer % 6 == 0)
        this.movingState = 3;
      else
        this.movingState = 2;
    }
    if (h >= 600 && h < 800 && w >= 1024 && w < 1280 && //Dependiendo del tamaño del celular
      mouseX >= (w - (w / 5)) && mouseX < (w - (w / 5)) + 142 && mouseY >= (h - (h / 3)) && mouseY < (h - (h / 3)) + 142) { //mouseclicked
      console.log("touched jump");
      if (!this.isFalling()) {
        this.velocity.y = -33;

      }
    }
  }





  draw() {
    // draw HUD for player stats
    for (var i = 0; i < this.lives; i++) {
      image(tiles_image, i * 25, 0, 50, 50, 64 * 11, 64 * 4, 64, 64)
    }
    if (this.keys > 0)
      image(tiles_image, width - 50, 0, 50, 50, 64 * 10, 64 * 4, 64, 64)
    else
      image(tiles_image, width - 50, 0, 50, 50, 64 * 6, 64 * 4, 64, 64)

    // draw player image
    if (this.injured && this.injuryTimer % 10 == 0) {
      image(player_injured_image, this.pos.x, this.pos.y - map1.yOffset, this.size, this.size, 96 * this.movingState, 0, this.spriteSize, this.spriteSize);
    } else {
      image(player_image, this.pos.x, this.pos.y - map1.yOffset, this.size, this.size, 96 * this.movingState, 0, this.spriteSize, this.spriteSize);
    }
  }

}