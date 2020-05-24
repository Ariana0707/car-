var canvas,backgroundImage;
var gameState = 0;
var playerCount;
var database;
var form,game,player;
var allPlayers;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
   
}

 