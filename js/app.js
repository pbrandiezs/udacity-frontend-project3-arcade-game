// Enemies our player must avoid
class Enemy {
    constructor() {
        this.sprite = 'images/enemy-bug.png';
        this.x = 0;
        this.y = Math.floor(Math.random() * 3) + 1;
        this.speed = Math.floor(Math.random() * 3) + 1;
    }
    update = function(dt) {
        // todo
        // console.log("In enemy update function!");
        this.x = this.x + dt * this.speed;
        if (this.x > 5) {
            this.x = 0;
        }
        this.checkCollision();
    }
    render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }
    checkCollision = function() {
        if (Math.floor(this.x) === player.x && this.y === player.y) {
            alert("Game Over!");
            player.x = 2;
            player.y = 5;
            window.location.replace("index.html");
        } else {
            // console.log("enemy - player x,y is " + Math.floor(this.x) + "," + this.y + "-" + player.x + "," + player.y);
        }
    }
}



/*
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
*/


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor(dt) {
        this.sprite = 'images/char-boy.png';
        this.x = 2;
        this.y = 5;
    }
    update = function(dt) {
        // todo
        // console.log("In player update function!");
    }
    render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }
    handleInput = function(key) {
        if (key === "up") {
            if (this.y > 0) {
                this.y--;
            } else {
                //winner - return to start position
                alert("Winner!");
                this.x = 2;
                this.y = 5;
            }
        }
        if (key === "down") {
            if (this.y < 5) {
                this.y++;
            }
        }
        if (key === "left") {
            if (this.x > 0) {
                this.x--;
            }
        }
        if (key === "right") {
            if (this.x < 4) {
                this.x++;
            }
        }

    }
};

/*
Player.prototype.update = function(dt) {
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(key) {
    console.log(key);
};
*/

// Now instantiate your objects.
var level = Math.floor(Math.random() * 10);
var allEnemies = [];
for(i=0; i <= level; i++ ) {
    let bug = new Enemy();
    // Place all enemy objects in an array called allEnemies
    allEnemies.push(bug);
}

// Place the player object in a variable called player
let player = new Player();




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
