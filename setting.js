// Snake game made using a tutorial found on:
// http://www.competa.com/blog/how-to-build-a-snake-game-using-javascript-and-html5-canvas/

// Capture html canvas object
var mycanvas = document.getElementsById('canvas');

// Setting some global vars
var ctx = mycanvas.getContext('2d');
var snakeSize = 10;
var w = 350;
var h = 350;
var score = 0;
var snake;
var food;

// this function work as a main function
var setup = function(){
  
}


var drawSnake = function(){
  //Remember: the snake is an chain of squares, so we will begin with an array
  //Initially the body of the snake will be formed by 3 squares
  var lenght = 3;
  snake = [];

  for(var i = lenght; i>=0; i--){
    snake.push({x:i, y:0});
  }
}

var createFood = function(){
  food = { x: Math.floor((Math.random() * 30) + 1),
      y: Math.floor((Math.random() * 30) + 1)
  }
  //Check the snake's body current position
  for (var i = 0; i < snake.length; i++) {
    var snakeX = snake[i].x;
    var snakeY = snake[i].y;
    //this conditions are kinda shady... just copying from original project for now,
    //but I must check if this actually cover all the cases
    if(food.x===snakeX || food.y === snakeY ||
      food.y ===snakeY && food.x===snakeX){
        food.x = Math.floor((Math.random() * 30) + 1);
        food.y = Math.floor((Math.random() * 30) + 1);
    }
  }
}

//Unfortunatly, we do now allow ourobouros yet
var checkCollision = function(x, y, array){
  for (var i = 0; i < array.length; i++) {
    if(array[i].x === x && array[i].y ===y){
      return true;
    }
    return false;
  }
}

//Module design pattern bellow
var drawModule = (function(){
  var bodySnake = function(x, y) {
    //Printing a single square Snake
    ctx.fillStyle = 'yellow'; //maybe it's a python molurus snake...
    ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  }

  var pizza = function(x, y) {
    // Pizza border
    ctx.fillStyle = 'brown';
    ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    //Single square
    ctx.fillStyle = 'red'
    ctx.fillRect(x*snakeSize+1,y*snakeSize+1, snakeSize-2, snakeSize-2);
  }

  var scoreText = function(){
    //How many pizzas can a snake take?
    var score_text = "Score: " + score;
    ctx. fillStyle = 'blue';
    ctx.fillText(score_text, 145, h - 5);
  }

})
