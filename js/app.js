//Declare variables
var allEnemies = [];

// Enemies our player must avoid
class Enemy {
    constructor() {
        this.sprite = 'images/enemy-bug.png';
        this.x = 0;
        this.y = Math.floor(Math.random() * 3) + 1;
        this.speed = Math.floor(Math.random() * 3) + 1;
    }
    update = function(dt) {
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

// Player
class Player {
    constructor(dt) {
        this.sprite = 'images/char-boy.png';
        this.x = 2;
        this.y = 5;
        this.level = 0;
    }
    update = function(dt) {
        // todo - not used
    }
    render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
        //Display level text
        ctx.font = '30pt impact';
        ctx.lineWidth = 3;
        ctx.fillStyle = 'white';
        ctx.fillText("Level: " + this.level, 350, 100);
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
                this.level++;
                //generate new random enemies
                allEnemies=[];
                instantiateEnemies();
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

function instantiateEnemies() {
    var enemyCount = Math.floor(Math.random() * 10);
    for(i=0; i <= enemyCount; i++ ) {
        let bug = new Enemy();
        // Place all enemy objects in an array called allEnemies
        allEnemies.push(bug);
    }
};

// Now instantiate your objects.
instantiateEnemies();

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
