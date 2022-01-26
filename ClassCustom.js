class CustomGame {
    constructor(numBlock,level,scoreCustom,subScoreCus) {
        this.numBlock =numBlock;
        this.level=level;
        this.scoreCustom=scoreCustom;
        this.subScoreCus=subScoreCus;
    }
    setNumBlockCus(x){
        this.numBlock =x;
    }
    updateFinalScoreCus(){
        if(this.scoreCustom<this.subScoreCus){
            this.scoreCustom=this.subScoreCus;
        }
    }
    setLevelCus(x){
        this.level=x;
    }
    updateScoreCus(x){
        this.subScoreCus=x;
    }
}
let levelCus=0;
function customGameCustom() {
    mode = false;
    let a = +prompt('Nhập số "a"<16 để tạo bảng trò chơi,thể loại custom, kích cỡ "aXa".');
    if(a<16) {
        setNumbBlock(a);
        playerName.CustomGame.setNumBlockCus(a);
        restartGame();
        let b = +prompt('Nhập số 1,2,3,69 tương ứng với mức độ dễ, trung bình, khó và MỨC DẠI.');
        levelCus = b;
        displayLevelCus();
        return 1;
    }
    alert("Không hợp lệ, mời nhập lại!");
    customGameCustom();
}
function displayLevelCus(){
    let lv='';
    if(levelCus==1){
        cnt=0;
        setGame(level[cnt]);
        lv ='Easy Mode';
        playerName.CustomGame.setLevelCus(lv);
        document.getElementById("level").innerHTML = lv;
        return 1;
    }
    if(levelCus==2){
        cnt=1;
        setGame(level[cnt]);
        lv ='Normal Mode';
        playerName.CustomGame.setLevelCus(lv);
        document.getElementById("level").innerHTML = lv;
        return 1;
    }
    if(levelCus==3){
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
