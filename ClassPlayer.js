class Player {
    constructor(name,CampaignGame,CustomGame) {
        this.name =name;
        this.CampaignGame=CampaignGame;
        this.CustomGame=CustomGame;
    }
getName(){
        return this.name;
}
getScoreCampaign(){
        s1=this.CampaignGame.numBlock;
        s2=this.CampaignGame.level;
        s3=this.CampaignGame.scoreCampaign;
}
getScoreCustom(){
        s1=this.CustomGame.numBlock;
        s2=this.CustomGame.level;
        s3=this.CustomGame.scoreCustom;
}
}
let s1,s2,s3;

