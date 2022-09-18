var Enemy = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function (dt) {
    this.x += this.speed * dt;

    if (this.x > 510) {

        this.x = -50;
        this.speed = Math.random() * 200 + 200;
    }

    if (player.x < this.x + 80 &&
        player.x + 80 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y) {

        player.x = 200;
        player.y = 400;

    }
};

Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


let Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.player = 'images/char-boy.png'
};

Player.prototype.update = function (dt) {

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

Player.prototype.handleInput = function (keyPress) {
    if (keyPress == 'left' && this.x > 0) {
        this.x -= 103;
    }
    if (keyPress == 'right' && this.x < 400) {
        this.x += 103;
    }
    if (keyPress == 'up' && this.y > 0) {
        this.y -= 85;
    }
    if (keyPress == 'down' && this.y < 400) {
        this.y += 85;
    }
    if (this.y < 0) {
        setTimeout(function () {
            player.x = 200;
            player.y = 400;
        }, 300);
    }
}

let allEnemies = [];
let enemyLocalion = [63, 147, 230]

enemyLocalion.forEach(function (locationY) {
    enemy = new Enemy(550, locationY, 200);
    allEnemies.push(enemy);
});


let player = new Player(200, 400);


document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
