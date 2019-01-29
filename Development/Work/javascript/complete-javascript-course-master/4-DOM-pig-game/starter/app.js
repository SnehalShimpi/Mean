/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores , roundscore , activeplayer , dice,gameplaying;

init();
//document.querySelector('#current-' + activeplayer).textContent= dice;
//document.querySelector('#current-' + activeplayer).innerHTML= '<em><b>' + dice  + '</em></b>';

//var x = document.querySelector('#score-0').textContent;

//document.querySelector('.dice').style.display= 'none';
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;

document.querySelector('.btn-roll').addEventListener('click',function()
 {    var dice ,dice1;
     //Random Number
  if(gameplaying)
      {
        dice = Math.floor(Math.random() * 6) + 1;
        dice1 = Math.floor(Math.random() * 6) + 1;
    //Display Result
    var DomDice = document.querySelector('.dice');
    DomDice.style.display='block';
    DomDice.src ='dice-' +dice+ '.png';
    var DomDice1 = document.querySelector('.dice1');
    DomDice1.style.display='block';
    DomDice1.src ='dice-' +dice1+ '.png';    
    
  //set the result if it not 1
  if(dice !== 1 && dice1 !== 1)
      {
          roundscore = roundscore + dice+dice1;   
          document.querySelector('#current-' + activeplayer).textContent= roundscore;
      }
  else
      {
         newPlayer();
      }  
      }
       
});

document.querySelector('.btn-hold').addEventListener('click',function()
                                                    {
    if(gameplaying)
        {
            //Add RoundScore to the Current Score
    scores[activeplayer]=scores[activeplayer]+roundscore;
    //Upadte UI
    
    document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];
    //win The Game
    
    if(scores[activeplayer]>=100)
        {
            document.querySelector('#name-' + activeplayer).textContent = 'Player win';
            document.querySelector('.dice').style.display= 'none';
            document.querySelector('.player-'+ activeplayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activeplayer + '-panel').classList.remove('winner');
            gameplaying=false;
        }
            
    else
    {
        newPlayer();  
        
    }
    
    
    }
    
    
});
document.querySelector('.btn-new').addEventListener('click',init);

function newPlayer()
{
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0; 
          roundscore = 0;
          document.getElementById('current-0').textContent = '0';
          document.getElementById('current-1').textContent = '0';
          document.querySelector('.player-0-panel').classList.toggle('active');
          document.querySelector('.player-1-panel').classList.toggle('active');
          document.querySelector('.dice').style.display= 'none';
          document.querySelector('.dice1').style.display= 'none';
}
function init()
{
   scores = [0,0];
 roundscore = 0;
activeplayer= 1;
    gameplaying=true;
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.getElementById('name-0').textContent='player 1';
document.getElementById('name-1').textContent='player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');  
    


}