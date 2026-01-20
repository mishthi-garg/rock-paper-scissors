let score = JSON.parse(localStorage.getItem('score')) || {wins:0, losses:0, ties:0};
    console.log(score);

    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

    function playGame(playerMove){
      const compMove = playCompMove();
      let result = '';
      if(playerMove === 'rock'){
        if(compMove === 'rock'){
          result = `It's a tie!`;
        }
        else if(compMove === 'paper'){
          result = 'You Lose!';
        }
        else{
          result = 'You Win!';
        }        
      }
      else if(playerMove === 'paper'){
        if(compMove === 'paper'){
        result = `It's a tie!`;
        }
        else if(compMove === 'scissors'){
          result = 'You Lose!';
        }
        else{
          result = 'You Win!';
        }
      }
      else{
        if(compMove === 'scissors'){
          result = `It's a tie!`;
        }
        else if(compMove === 'rock'){
          result = 'You Lose!';
        }
        else{
          result = 'You Win!';
        }
      }

      updateScore(result);
      updateScoreElements();

      document.querySelector('.js-moves').innerHTML = `You <img class="move-img" src="move-images/${playerMove}-emoji.png">  <img class="move-img" src="move-images/${compMove}-emoji.png"> Computer`;

      document.querySelector('.js-result').innerHTML = `${result}`;

      console.log(`Computer picked ${compMove}. You picked ${playerMove}. ${result}`);
      console.log(score);
    }

    function updateScoreElements(){
      document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function updateScore(result){
      if(result === 'reset'){
        score = {wins:0, losses: 0, ties: 0};
        console.log('Score reset');
        console.log(score);

        updateScoreElements();

        localStorage.removeItem('score');
        return;
      }
      if(result === `It's a tie!`){
        score.ties++;
      }
      else if(result === 'You Win!'){
        score.wins++;
      }
      else{
        score.losses++;
      }
      localStorage.setItem('score',JSON.stringify(score));
    }

    function playCompMove(){
      randomNumber = Math.random();
      let compMove = '';
      if(randomNumber < 1/3){
        compMove = 'rock';
      }
      else if(randomNumber >= 1/3 && randomNumber < 2/3){
        compMove = 'paper';
      }
      else{
        compMove = 'scissors';
      }
      return compMove;
    }