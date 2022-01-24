let arr =[];
let arr2=[];
let arrvalue =[];
let display ="";
let safe = true;
let safespot = 64;
let level =[9,8.5,8,8,7.5,6.5];
let cnt =0;

function createBoard() {
    for (let i = 0; i < 8; i++) {
        arr[i] = [];
        arr2[i]=[];
        for (let j = 0; j < 8; j++) {
            arr[i][j] = '<input type="button" id="no' + i + j + '" value=" " oncontextmenu="flag(' + i + ',' + j + ')" onClick="clickAction(' + i + ',' + j + ')"/>';
            arr2[i][j]= 9;
        }
    }
    drawBoard();
}
function flag(i,j){
    let y = "no"+i+j;
    let x = document.getElementById(y).value;
    if(x==' '){
        arr[i][j] = '<input type="button" id="no' + i + j + '" value="&#10067" oncontextmenu="flag(' + i + ',' + j + ')" onClick="clickAction(' + i + ',' + j + ')"/>';
        drawBoard();
    }
    else{
        arr[i][j] = '<input type="button" id="no' + i + j + '" value=" " oncontextmenu="flag(' + i + ',' + j + ')" onClick="clickAction(' + i + ',' + j + ')"/>';
        drawBoard();
    }
}
function setBoom(x) {
    for (let i = 0; i < 8; i++) {
        arrvalue[i] = []
        for (let j = 0; j < 8; j++) {
            let a = Math.random() * 10;
            if (a > x) {
                arrvalue[i][j] = '&#128163';
                safespot--;
                console.log(safespot)
            }
            else {
                arrvalue[i][j] = 0;
            }
        }
    }
}
function setNumAfterBoom() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            setNum(i,j);
        }
    }
}
function setNum(i,j){
    if (arrvalue[i][j] != '&#128163') {
        if(i-1>=0&&j-1>=0){if(arrvalue[i-1][j-1] == '&#128163'){arrvalue[i][j]++;}}
        if(i-1>=0){if(arrvalue[i-1][j] == '&#128163'){arrvalue[i][j]++;}}
        if(i-1>=0&&j+1<8){if(arrvalue[i-1][j+1] == '&#128163'){arrvalue[i][j]++;}}
        if(j-1>=0){if(arrvalue[i][j-1] == '&#128163'){arrvalue[i][j]++;}}
        if(j+1<8)if(arrvalue[i][j+1] == '&#128163'){arrvalue[i][j]++;}
        if(i+1<8&&j-1>=0){if(arrvalue[i+1][j-1] == '&#128163'){arrvalue[i][j]++;}}
        if(i+1<8)if(arrvalue[i+1][j] == '&#128163'){arrvalue[i][j]++;}
        if(i+1<8&&j+1<8)if(arrvalue[i+1][j+1] == '&#128163'){arrvalue[i][j]++;}
    }
}

function setGame(x){
    display ="";
    safespot = 64;
    let lv = '';
    if(cnt==5){
        lv = "Level Hell";
    }
    else {
        lv ="Level "+(cnt+1);
    }
    document.getElementById("level").innerHTML = lv;
    setBoom(x);
    setNumAfterBoom();
    createBoard();
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j <8; j++) {
            if(arrvalue[i][j]%2==1){
                clickFunction(i,j);
                return 1;
            }
        }
    }
}
function drawBoard(){
    display ="<table border='0' cellspacing='0' cellpadding='0'>";
    for (let i = 0; i < 8; i++) {
        display+="<tr>";
        for (let j = 0; j < 8; j++) {
            display += "<td>"+arr[i][j]+"</td>";
        }
        display += "</tr>";
    }
    display+='</table>';
    document.getElementById("display").innerHTML = display;
}
function clickFunction(a,b){
    if(arr2[a][b]==arrvalue[a][b]){
        return 1;
    }
    safespot--;
    console.log(safespot);
    arr[a][b]='<input type="button" value="'+arrvalue[a][b]+'"/>';
    drawBoard();
    arr2[a][b] = arrvalue[a][b];
    if(arrvalue[a][b]=='&#128163'){
        safe = false;
        checkWin();
        return 1;
    }
    if(safespot==0){
        checkWin();
    }
}
function clickAction(a,b){
    clickFunction(a,b);
    if(arrvalue[a][b]==0){
        if(a-1>=0&&b-1>=0){clickFunction(a-1,b-1);}
        if(a-1>=0){clickFunction(a-1,b);}
        if(a-1>=0&&b+1<8){clickFunction(a-1,b+1);}
        if(b-1>=0){clickFunction(a,b-1);}
        if(b+1<8){clickFunction(a,b+1);}
        if(a+1<8&&b-1>=0){clickFunction(a+1,b-1);}
        if(a+1<8){clickFunction(a+1,b);}
        if(a+1<8&&b+1<8){clickFunction(a+1,b+1);}
    }
}
function revealBoard(){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            arr[i][j]='<input type="button" value="'+arrvalue[i][j]+'"/>'
        }
    }
    display ="";
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            display += arr[i][j];
        }
        display += "<br/>";
    }
    document.getElementById("display").innerHTML = display;
}
function checkWin(){
    if(safe){
        let x = '<iframe src="https://giphy.com/embed/yJFeycRK2DB4c" width="480" height="384" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
        document.getElementById("gif").innerHTML = x;
        revealBoard();
        alert("You Win!");
        cnt++;
        if(cnt==level.length){
            document.getElementById("nextLevel").innerHTML = "Looking for what? There's no next level!";
            return 1;
        }
        let y = '<button onClick="nextLevel('+ level[cnt] +')">Begin Next Level</button>';
        document.getElementById("nextLevel").innerHTML = y;
    }
    else{
        let a = '<iframe src="https://giphy.com/embed/3o85xnoIXebk3xYx4Q" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>'
        document.getElementById("gif").innerHTML = a;
        revealBoard();
        alert("Boom! You're dead!");
    }
    safe = true;
}
function nextLevel(x){
    setGame(x);
    document.getElementById("nextLevel").innerHTML = '';
    document.getElementById("gif").innerHTML = '';
}
function restartGame(){
    document.getElementById("gif").innerHTML = '';
    cnt=0;
    setGame(level[cnt]);
}
setGame(level[cnt]);