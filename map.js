class Map {

  constructor(b) {
    this.levelList = b;
    this.currentLevel = 0;
    this.enemyList = [];
    this.itemList = [];
    this.blocks = [];
    this.offset = 0;
    this.yOffset = (this.levelList[this.currentLevel].length * 50) - height;
    this.gameState = "playing";
    // load in all blocks from map data
    this.loadLevel();
  }

  changeLevel() {
    this.currentLevel++;
    this.enemyList = [];
    this.itemList = [];
    this.offset = 0;
    this.yOffset = (this.levelList[this.currentLevel].length * 50) - height;
    this.loadLevel();
    player.pos = createVector(100, map1.yOffset);
  }

  loadLevel() {
    this.blocks = this.levelList[this.currentLevel];
    // 0 --> empty space	= empty transparent space
    // 1 --> dirt			= Solid block, play cannot pass through
    // 2 --> dirt w/ grass	= Solid block, play cannot pass through
    // 3 --> fence 			= Decor block, decorative,not solid & not collectible) 
    // 4 --> bush			= Decor block, decorative,not solid & not collectible) 
    // 5 --> heart 			= Item blocks, collectible
    // 6 --> key			= Item blocks, collectible
    // 7 --> door			= 5 open, 9 closed
    // 8 --> spikes(2)		= Enemy block, hurts player
    // 9 --> saw blade		= Enemy block, hurts player (movible)
    for (var row = 0; row < this.blocks.length; row++) {
      for (var col = 0; col < this.blocks[row].length; col++) {
        switch (this.blocks[row][col]) {
          case 0: // Transparent
            break;
          case 1: // GRASS BLOCK
            this.blocks[row][col] = new Solid(col * 50, row * 50, [2, 0]);
            break;
          case 2: // DIRT BLOCK
            this.blocks[row][col] = new Solid(col * 50, row * 50, [3, 0]);
            break;
          case 3: // FENCE
            this.blocks[row][col] = new Decor(col * 50, row * 50, [0, 4]);
            break;
          case 4: // BUSH
            this.blocks[row][col] = new Decor(col * 50, row * 50, [2, 5]);
            break;
          case 5: // FULL HEART
            this.blocks[row][col] = new Item(col * 50, row * 50, [11, 4], "heart");
            this.itemList.push(this.blocks[row][col]);
            break;
          case 6: // KEY
            this.blocks[row][col] = new Item(col * 50, row * 50, [7, 4], "key");
            this.itemList.push(this.blocks[row][col]);
            break;
          case 7: // DOOR
            this.blocks[row][col] = new Item(col * 50, row * 50, [6, 6], "door");
            this.itemList.push(this.blocks[row][col]);
            break;
          case 8: // SPIKES
            this.blocks[row][col] = new Enemy(col * 50, row * 50, [0, 5], false);
            this.enemyList.push(this.blocks[row][col]);
            break;
          case 9: // SAW BLADE
            this.blocks[row][col] = new Enemy(col * 50, row * 50, [1, 5], true);
            this.enemyList.push(this.blocks[row][col]);
            break;
          case 10: // SAW BLADE
            this.blocks[row][col] = new Enemy(col * 50, row * 50, [4, 0], false);
            this.enemyList.push(this.blocks[row][col]);
            break;
        }
      }
    }
  }
 draw() {
    // draw the map
    for (var row = 0; row < this.blocks.length; row++) {
      for (var col = 0; col < this.blocks[row].length; col++) {

        if (this.blocks[row][col] != 0) {
          this.blocks[row][col].draw(this.offset, this.yOffset);
        }
      }
    }
  }

}