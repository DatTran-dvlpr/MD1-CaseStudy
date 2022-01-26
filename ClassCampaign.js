class CampaignGame{
    constructor(player,numBlock,level,scoreCampaign,subScoreCam) {
        this.player=player;
        this.numBlock=numBlock;
        this.level=level;
        this.scoreCampaign=scoreCampaign;
        this.subScoreCam=subScoreCam;
    }
    setNumBlockCam(x){
        this.numBlock =x;
    }
    updateLevel(x){
        this.level=x;
    }
    updateFinalScoreCam(){
        if(this.scoreCampaign<this.subScoreCam){
            this.scoreCampaign=this.subScoreCam;
        }
    }
    updateScoreCam(x){
        this.subScoreCam += x;
    }
}
function customGameCampaign(){
    mode=true;
    let a = +prompt('Nhập số "a"<16 để tạo bảng trò chơi,thể loại campaign, kích cỡ "aXa".');
    if(a<16){
    playerName.CampaignGame.setNumBlockCam(a);
    setNumbBlock(a);
    restartGame();
    return 1;
    }
    alert("Không hợp lệ, mời nhập lại!");
    customGameCampaign();
}