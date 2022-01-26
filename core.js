let arr =[];//mảng dùng để hiển thị
let arr2=[];//mảng dùng để check xem khu vực đã bị click hay chưa, nếu đã được click thì hủy clickAction
let arrvalue =[];//mảng lưu giá trị
let mode =true;//chế độ Campaign, ngược lại là Custom
let display ="";//biến dùng để lưu dữ liệu bảng game để in ra
let safe = true;//biến check win
let numb = 8;//biến dùng để lưu số lượng cột và dòng (default là 8)
let safespot = numb*numb;//biến dùng để lưu số vị trí an toàn để click, sẽ bị trừ đi ở công đoạn setBoom và clickAction
let level =[9,8.5,8,8,7.5,6.5];//biến lưu giá trị tương ứng với độ khó từ dễ đến khó, dùng trong cài đặt tỷ lệ boom
let cnt =0;//biến đếm index của mảng level
let boomIcon = '&#127879;';//có thể thay đổi hình dạng quả boom ở đây
let numbOfBoom=0;//biến lưu số lượng boom trong game, có giá trị trong tính toán Score


function setGame(x){
    display ="";
    safespot = numb*numb;
    numbOfBoom=0;
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
    for (let i = 0; i < numb; i++) {
        for (let j = 0; j <numb; j++) {
            if(arrvalue[i][j]%2==1){
                clickFunction(i,j);
                return 1;
            }
        }
    }
}
function setNumbBlock(x){
    numb = x;
}
function createBoard() {
    for (let i = 0; i < numb; i++) {
        arr[i] = [];
        arr2[i]=[];
        for (let j = 0; j < numb; j++) {
            arr[i][j] = '<input type="button" id="no' + i + j + '" value="  " oncontextmenu="flag(' + i + ',' + j + ')" onClick="clickAction(' + i + ',' + j + ')"/>';
            arr2[i][j]= 9;
        }
    }
    drawBoard();
}
function drawBoard(){
    display ="<table border='0' cellspacing='0' cellpadding='0'>";
    for (let i = 0; i < numb; i++) {
        display+="<tr>";
        for (let j = 0; j < numb; j++) {
            display += "<td>"+arr[i][j]+"</td>";
        }
        display += "</tr>";
    }
    display+='</table>';
    document.getElementById("display").innerHTML = display;
}
function flag(i,j){
    let y = "no"+i+j;
    let x = document.getElementById(y).value;
    if(x=='  '){
        arr[i][j] = '<input style="font-size: 20px" type="button" id="no' + i + j + '" value="&#10067" oncontextmenu="flag(' + i + ',' + j + ')" onClick="clickAction(' + i + ',' + j + ')"/>';
        drawBoard();
    }
    else{
        arr[i][j] = '<input type="button" id="no' + i + j + '" value="  " oncontextmenu="flag(' + i + ',' + j + ')" onClick="clickAction(' + i + ',' + j + ')"/>';
        drawBoard();
    }
}
function setBoom(x) {
    for (let i = 0; i < numb; i++) {
        arrvalue[i] = []
        for (let j = 0; j < numb; j++) {
            let a = Math.random() * 10;
            if (a > x) {
                arrvalue[i][j] = boomIcon;
                safespot--;
                numbOfBoom++;
                console.log(safespot);
            }
            else {
                arrvalue[i][j] = 0;
            }
        }
    }
}
function setNumAfterBoom() {
    for (let i = 0; i < numb; i++) {
        for (let j = 0; j < numb; j++) {
            setNum(i,j);
        }
    }
}
function setNum(i,j){
    if (arrvalue[i][j] != boomIcon) {
        if(i-1>=0&&j-1>=0){if(arrvalue[i-1][j-1] == boomIcon){arrvalue[i][j]++;}}
        if(i-1>=0){if(arrvalue[i-1][j] == boomIcon){arrvalue[i][j]++;}}
        if(i-1>=0&&j+1<numb){if(arrvalue[i-1][j+1] == boomIcon){arrvalue[i][j]++;}}
        if(j-1>=0){if(arrvalue[i][j-1] == boomIcon){arrvalue[i][j]++;}}
        if(j+1<numb)if(arrvalue[i][j+1] == boomIcon){arrvalue[i][j]++;}
        if(i+1<numb&&j-1>=0){if(arrvalue[i+1][j-1] == boomIcon){arrvalue[i][j]++;}}
        if(i+1<numb)if(arrvalue[i+1][j] == boomIcon){arrvalue[i][j]++;}
        if(i+1<numb&&j+1<numb)if(arrvalue[i+1][j+1] == boomIcon){arrvalue[i][j]++;}
    }
}

function clickFunction(i,j){
    if(arr2[i][j]==arrvalue[i][j]){
        return 1;
    }
    safespot--;
    console.log(safespot);
    arr[i][j]='<input type="button" value="'+arrvalue[i][j]+'"/>';
    drawBoard();
    arr2[i][j] = arrvalue[i][j];
    if(arrvalue[i][j]== boomIcon){
        safe = false;
        checkWin();
        return 1;
    }
    if(safespot==0){
        checkWin();
    }
}
function clickAction(i,j){
    playTapSound();
    playProgressing();
    clickFunction(i,j);
    if(arrvalue[i][j]==0){
        if(i-1>=0&&j-1>=0){clickFunction(i-1,j-1);}
        if(i-1>=0){clickFunction(i-1,j);}
        if(i-1>=0&&j+1<numb){clickFunction(i-1,j+1);}
        if(j-1>=0){clickFunction(i,j-1);}
        if(j+1<numb){clickFunction(i,j+1);}
        if(i+1<numb&&j-1>=0){clickFunction(i+1,j-1);}
        if(i+1<numb){clickFunction(i+1,j);}
        if(i+1<numb&&j+1<numb){clickFunction(i+1,j+1);}
    }
}
function revealBoard(){
    for (let i = 0; i < numb; i++) {
        for (let j = 0; j < numb; j++) {
            if(arrvalue[i][j]==boomIcon){
                arr[i][j]='<input style="font-size: 20px" type="button" value="'+arrvalue[i][j]+'"/>'
            }
            else {
                arr[i][j]='<input type="button" value="'+arrvalue[i][j]+'"/>';
            }
        }
    }
    drawBoard();
}
function checkWin(){
    if(safe){
        let x = '<iframe src="https://giphy.com/embed/yJFeycRK2DB4c" width="480" height="384" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
        document.getElementById("gif").innerHTML = x;
        revealBoard();
        stopProgressing();
        playerName.CampaignGame.updateScoreCam(numbOfBoom);
        let lv =document.getElementById("level").innerHTML;
        playerName.CampaignGame.updateLevel(lv);
        playCompleteSound();
        alert("You Win!");

        cnt++;
        if(cnt==level.length&&mode){
            playerName.CampaignGame.updateFinalScoreCam();
            displayScoreEnd();
            document.getElementById("nextLevel").innerHTML = "Looking for what? There's no next level!";
            safe = true;
            return 1;
        }
        if(mode){
            displayScoreInProcess();
            let y = '<button style="width: 200px;height: 40px;background-color: darkred;color: white;font-size: 20px" onClick="nextLevel('+ level[cnt] +')"><b>Begin Next Level</b></button>';
            document.getElementById("nextLevel").innerHTML = y;
        }
        else {
            playerName.CustomGame.updateScoreCus(numbOfBoom);
            playerName.CustomGame.updateFinalScoreCus();
            console.log(playerName.CustomGame.scoreCustom);
            displayScoreEnd();
        }
    }
    else{
        let a = '<iframe src="https://giphy.com/embed/3o85xnoIXebk3xYx4Q" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>'
        document.getElementById("gif").innerHTML = a;
        revealBoard();
        stopProgressing();
        playFailSound();
        displayScoreEnd();
        alert("YOU DIE");
    }
    safe = true;
}

function displayScoreInProcess(){
    if(mode){
        let a = 'Score: '+ playerName.CampaignGame.subScoreCam;
        document.getElementById("score").innerHTML = a;
    }
    else {
        let b = 'Score: '+ playerName.CustomGame.subScoreCus;
        document.getElementById("score").innerHTML = b;
    }
}
function displayScoreEnd(){
    if(mode){
        playerName.CampaignGame.updateFinalScoreCam();
        let x ="Player: "+playerName.name+"<br/>Mode: Campaign-"+numb+'x'+numb+'<br/>Score: '+
            playerName.CampaignGame.level+'; point: '+playerName.CampaignGame.subScoreCam+
            '<br/>Highscore: '+ playerName.CampaignGame.scoreCampaign;
        document.getElementById("score").innerHTML=x;
        playerName.CampaignGame.subScoreCam =0;
    }
    else {
        playerName.CustomGame.updateFinalScoreCus();
        let x ="Player: "+playerName.name+"<br/>Mode: Custom-"+numb+'x'+numb+'<br/>Score: '+
            playerName.CustomGame.level+'; point: '+playerName.CustomGame.subScoreCus+
            '<br/>Highscore: '+ playerName.CustomGame.scoreCustom;
        document.getElementById("score").innerHTML=x;
        playerName.CustomGame.subScoreCus =0;
    }
}

function nextLevel(x){
    setGame(x);
    document.getElementById("nextLevel").innerHTML = '';
    document.getElementById("gif").innerHTML = '';
}
function restartGame(){
    if(mode){
        cnt=0;
        document.getElementById("gif").innerHTML = '';
        setGame(level[cnt]);
        playerName.CampaignGame.subScoreCam =0;
        displayScoreInProcess();
    }
    else {
        document.getElementById("gif").innerHTML = '';
        setGame(level[cnt]);
        displayLevelCus();
        displayScoreInProcess();
    }
}