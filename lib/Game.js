function Game () {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

Game.prototype.initialiseGame = function () {

    this.enemies.push(new Enemy('Robotic Richard Simmons', 'fists of fury'));
    this.enemies.push(new Enemy('Gandalf the Grey', 'Glamdring'));
    this.enemies.push(new Enemy('Drunken Chris Lightfellow', 'Eternal'));

    this.currentEnemy = this.enemies[0];

    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'So, tell me - what is your name, brave hero?'
    })
    // destructing the name from the prompt object
    .then(({ name }) => {
        this.player = new Player(name);

        this.startNewBattle()

    });

};



module.exports = Game;

const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const enemy = require('./Enemy');
const Player = require('./Player');

