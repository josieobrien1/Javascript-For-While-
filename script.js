var dragonEle = document.body.querySelector(".dragondamage");
var userEle= document.body.querySelector(".userdamage");
var winnerEle= document.body.querySelector(".winner");
// var repeat = "hits"
// var number = 0
var userdamage = 0;
var dragondamage = 0;
while(userdamage<5&&dragondamage<10){
  var inputhits=Number(prompt("What is the damage?"));
var randomdragondamage= Math.floor(Math.random() * inputhits) + 1;
  if(randomdragondamage > 5){
    dragondamage = dragondamage + 1;
  }
  else{
    dragondamage= randomdragondamage + dragondamage;
  }
  var randomuserdamage = Math.floor(Math.random() * 2) + 1;
  userdamage= randomuserdamage + userdamage;
dragonEle.innerHTML= dragondamage + " dragon's health";
  userEle.innerHTML= userdamage + " user's health";
}
if(dragondamage>=10){
  winnerEle.innerHTML=" user wins";
  
}
if(userdamage>=5){
  winnerEle.innerHTML=" dragon wins";
}