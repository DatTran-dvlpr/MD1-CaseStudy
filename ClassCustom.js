class CustomGame {
    constructor(numBlock,level,scoreCustom) {
        this.numBlock =numBlock;
        this.level=level;
        this.scoreCustom=scoreCustom;
    }
    setNumBlockCus(x){
        this.numBlock =x;
    }
    setLevelCus(x){
        this.level=x;
    }
    updateScoreCus(x){
        this.scoreCustom=x;
    }
}
function customGameCustom(){
    mode=false;
    let a = +prompt('Nhập số "a" để tạo bảng trò chơi,thể loại custom, kích cỡ "aXa".');
    setNumbBlock(a);
    playerName.CustomGame.setNumBlockCus(a);
    restartGame();
    let b = +prompt('Nhập số 1,2,3,69 tương ứng với mức độ dễ, trung bình, khó và MỨC DẠI.');
    let lv='';
    if(b==1){
        cnt=0;
        setGame(level[cnt]);
        lv ='Easy Mode';
        playerName.CustomGame.setLevelCus(lv);
        document.getElementById("level").innerHTML = lv;
        return 1;
    }
    if(b==2){
        cnt=1;
        setGame(level[cnt]);
        lv ='Normal Mode';
        playerName.CustomGame.setLevelCus(lv);
        document.getElementById("level").innerHTML = lv;
        return 1;
    }
    if(b==3){
        cnt=2;
        setGame(level[cnt]);
        lv ='Hard Mode';
        playerName.CustomGame.setLevelCus(lv);
        document.getElementById("level").innerHTML = lv;
        return 1;
    }
    cnt=level.length-1;
    setGame(level[cnt]);
    lv ='What the Hell is this Mode!?';
    playerName.CustomGame.setLevelCus("Hell Mode");
    document.getElementById("level").innerHTML = lv;
}