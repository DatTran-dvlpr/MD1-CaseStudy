setGame(level[cnt]);
let abc = prompt("Nhập tên người chơi.");
let playerName = new Player(abc);
let scoreCam = new CampaignGame(playerName,numb,0,0,0);
playerName.CampaignGame=scoreCam;
let scoreCus = new CustomGame(playerName,numb,0,0);
playerName.CustomGame=scoreCus;
displayScoreInProcess();

