


var scores, roundscore, activePlayer, gamePlay, pre;

init();



function btn(){
    if(gamePlay)
        {
            
            
    // 1. Random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    console.log(dice1 + " " + dice2);
    // Sum of 2 dices
    var eql = dice1 + dice2;
    //2. Display the result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    
    
    //3. Update the round score, if the rolled score was not 1!
            if(dice1 === 1 && dice2 === 1)
                {
                    nextP();
                }   
            else {
                
     //Add score 
                    roundscore += eql;
                    document.querySelector('#current-' + activePlayer).textContent = roundscore;
                    
                }   
        }
}
    


function btn2()
{
    if(gamePlay)
        {
    //Add Current score to global score
    scores[activePlayer] += roundscore;
    
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
            var input = document.querySelector('.final-score').value;
            var win;
            
        if(input){
            
            win = input;
        }   else win = 100;
    
    //Check if some player won the game 
    if(scores[activePlayer] >= win) 
    {
        alert('Player ' + (activePlayer+1) +  ' has won the game!');
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
       // document.querySelector('.btn-roll').style.display = 'none';
       // document.querySelector('.btn-hold').style.display = 'none';
        gamePlay = false;       // Right now, buttons are inactive
    }   else{
        
    
    //Next Player
            nextP();
    }
    
    
        }
            
}

function nextP()
{
    
   
    //Next Player
            activePlayer === 0? activePlayer = 1 : activePlayer = 0;
            roundscore = 0;
            
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            
            document.querySelector('.player-1-panel').classList.toggle('active');
           
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            
    
    
}

function init(){
    
    
    scores = [0,0];
    roundscore = 0;
    // 0 -> first player    1-> second player
    activePlayer = 0;
    gamePlay = true;
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.player-0-panel').classList.remove('winner'); 
    document.querySelector('.player-1-panel').classList.remove('winner'); 
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active'); 
    document.querySelector('.player-1-panel').classList.remove('active'); 

}




document.querySelector('.btn-roll').addEventListener('click',btn);
document.querySelector('.btn-hold').addEventListener('click', btn2); 
document.querySelector('.btn-new').addEventListener('click', init);   
    
    
    