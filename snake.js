var canvas = document.getElementById("canvasId");
var ctx = canvas.getContext("2d");

var px=0;
var py=300;
var x=0;
var y=300;
var west = false;
var east = true;
var north = false;
var south = false;

var gameOver = false;

const m = 650;
const  n = 800;
let game = new Array(m); // create an empty array of length n
for (var i = 0; i < m; i++) {
  game[i] = new Array(n); // make each element an array
}

for(var i=0;i<m;i++){
    for(var j=0;j<n;j++){
        game[i][j]=0;
    }
}




const left = document.getElementById('left');

var leftClicked = false;

left.addEventListener('click', function handleClick() {
  leftClicked = true;
});


const right = document.getElementById('right');

var rightClicked = false;

right.addEventListener('click', function handleClick() {
  rightClicked = true;
});

const stp = document.getElementById('stp');

var stopClicked = false;



var timer =setInterval(move,50);


stp.addEventListener('click', function handleClick() {
    stopClicked = true;
    if(stopClicked){
        if (stp.value=="Stop") {
            stp.value = "Start";
            clearInterval(timer);
            stopClicked=false;
            return;
        }
        else {
            stp.value = "Stop";
            if(!gameOver){
                timer =setInterval(move,50);
                stopClicked=false;
                return;  
            }
        }
    }
});





function move(){
    //east
    if(east){
        if(leftClicked){
            leftClicked=false;
            east=false;
            north=true;
            y--;
            if(!isInBounds()){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else if(game[y][x]==1){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else{
                game[y][x]=1;
                ctx.moveTo(px,py);
                ctx.lineTo(x,y);
                ctx.stroke();
                px=x;
                py=y;
            }
        }
    
        else if(rightClicked){
            rightClicked=false;
            east=false;
            south=true;
            y++;
            if(!isInBounds()){
                clearInterval(timer);
                gameOver=true;
                return
            }
            else if(game[y][x]==1){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else{
                game[y][x]=1;
                ctx.moveTo(px,py);
                ctx.lineTo(x,y);
                ctx.stroke();
                px=x;
                py=y;
            }
        }
        else{
            x++;
            if(!isInBounds()){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else if(game[y][x]==1){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else{
                game[y][x]=1;
                ctx.moveTo(px,py);
                ctx.lineTo(x,y);
                ctx.stroke();
                px=x;
                py=y;
            }
        }
    }
    //west
    else if(west){
        if(leftClicked){
            leftClicked=false;
            west=false;
            south=true;
            y++;
            if(!isInBounds()){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else if(game[y][x]==1){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else{
                game[y][x]=1;
                ctx.moveTo(px,py);
                ctx.lineTo(x,y);
                ctx.stroke();
                px=x;
                py=y;
            }
        }
    
        else if(rightClicked){
            rightClicked=false;
            west=false;
            north=true;
            y--;
            if(!isInBounds()){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else if(game[y][x]==1){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else{
                game[y][x]=1;
                ctx.moveTo(px,py);
                ctx.lineTo(x,y);
                ctx.stroke();
                px=x;
                py=y;
            }
        }
        else{
            x--;
            if(!isInBounds()){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else if(game[y][x]==1){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else{
                game[y][x]=1;
                ctx.moveTo(px,py);
                ctx.lineTo(x,y);
                ctx.stroke();
                px=x;
                py=y;
            }
        }
    }
    //south
    else if(south){
        if(leftClicked){
            leftClicked=false;
            south=false;
            east=true;
            x++;
            if(!isInBounds()){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else if(game[y][x]==1){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else{
                game[y][x]=1;
                ctx.moveTo(px,py);
                ctx.lineTo(x,y);
                ctx.stroke();
                px=x;
                py=y;
            }
        }
    
        else if(rightClicked){
            rightClicked=false;
            south=false;
            west=true;
            x--;
            if(!isInBounds()){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else if(game[y][x]==1){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else{
                game[y][x]=1;
                ctx.moveTo(px,py);
                ctx.lineTo(x,y);
                ctx.stroke();
                px=x;
                py=y;
            }
        }
        else{
            y++;
            if(!isInBounds()){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else if(game[y][x]==1){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else{
                game[y][x]=1;
                ctx.moveTo(px,py);
                ctx.lineTo(x,y);
                ctx.stroke();
                px=x;
                py=y;
            }
        }
    }
    //north
    else{
        if(leftClicked){
            leftClicked=false;
            north=false;
            west=true;
            x--;
            if(!isInBounds()){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else if(game[y][x]==1){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else{
                game[y][x]=1;
                ctx.moveTo(px,py);
                ctx.lineTo(x,y);
                ctx.stroke();
                px=x;
                py=y;
            }
        }
    
        else if(rightClicked){
            rightClicked=false;
            north=false;
            east=true;
            x++;
            if(!isInBounds()){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else if(game[y][x]==1){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else{
                game[y][x]=1;
                ctx.moveTo(px,py);
                ctx.lineTo(x,y);
                ctx.stroke();
                px=x;
                py=y;
            }
        }
        else{
            y--;
            if(!isInBounds()){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else if(game[y][x]==1){
                clearInterval(timer);
                gameOver=true;
                return;
            }
            else{
                game[y][x]=1;
                ctx.moveTo(px,py);
                ctx.lineTo(x,y);
                ctx.stroke();
                px=x;
                py=y;
            }
        }
    }
}



function isInBounds(){
    if(x<0||y<0||x>800||y>650){
        return false;
    } 
    else{
        return true;
    }
 }