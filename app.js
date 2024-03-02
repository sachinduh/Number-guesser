    let attempts = 3;
    let randomNumber;
    let gameWon = false;

    function generateAndCheck() {
      if (gameWon) {
        document.getElementById('result').innerHTML = "You've already won!";
        return;
      }

      const userInput = parseInt(document.getElementById('userInput').value);

      if (attempts > 0) {
        randomNumber = Math.floor(Math.random() * 10) + 1; // Generate random number between 1 and 10

        if (userInput === randomNumber) {
          document.getElementById('result').innerHTML = `You win! The generated number was ${randomNumber}.`;
          gameWon = true;
        } else {
          attempts--;
          document.getElementById('result').innerHTML = `Try again. You have ${attempts} attempts left. The generated number was ${randomNumber}.`;
          if (attempts === 0) {
            document.getElementById('result').innerHTML = `You lose!`;
          }
        }
      } else {
        document.getElementById('result').innerHTML = `You lose!`;
      }
    }