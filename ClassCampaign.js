class CampaignGame{
    constructor(numBlock,level,scoreCampaign,subScore) {
        this.numBlock=numBlock;
        this.level=level;
        this.scoreCampaign=scoreCampaign;
        this.subScore=subScore;
    }
    setNumBlockCam(x){
        this.numBlock =x;
    }
    updateLevel(x){
        this.level=x;
    }
    updateFinalScoreCam(){
        if(this.scoreCampaign<this.subScore){
            this.scoreCampaign=this.subScore;
        }
        this.subScore=0;
    }
    updateScoreCam(x){
        this.subScore += x;
    }
}
function customGameCampaign(){
    mode=true;
    setPlayerInfo();
    let a = +prompt('Nhập số "a" để tạo bảng trò chơi,thể loại campaign, kích cỡ "aXa".');
    playerName.CampaignGame.setNumBlockCam(a);
    setNumbBlock(a);
    restartGame();
}