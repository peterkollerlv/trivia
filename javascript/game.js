exports = typeof window !== "undefined" && window !== null ? window : global;

var outputLog = '';
var logToOutput = function (entry) {
  var textnode = document.createTextNode(entry); 
  var lineBreak = document.createElement("BR"); 
  document.getElementById('gameOutput').appendChild(textnode);
  document.getElementById('gameOutput').appendChild(lineBreak);
  outputLog += entry + '\n';
}

/*
export GameStart = function(numberOfPlayers, playerRolls, goodAnswer){
  return new Game(numberOfPlayers, playerRolls, goodAnswer);
}
*/
var Game = function (numberOfPlayers) {
  var players = new Array(numberOfPlayers);
  var places = new Array(numberOfPlayers);
  var purses = new Array(numberOfPlayers);
  var inPenaltyBox = new Array(numberOfPlayers);

  var popQuestions = new Array();
  var scienceQuestions = new Array();
  var sportsQuestions = new Array();
  var rockQuestions = new Array();


  var currentPlayer = 0;
  var isGettingOutOfPenaltyBox = false;

  var didPlayerWin = function () {
    return !(purses[currentPlayer] == 6)
  };

  var movePlayer = function (roll) {
    places[currentPlayer] = places[currentPlayer] + roll;
    returnToStartOnLastPlace();
  };

  var returnToStartOnLastPlace = function () {
    if (places[currentPlayer] > 11) {
      places[currentPlayer] = places[currentPlayer] - 12;
    }
  };

  var wasCorrectlyAnswered = function () {
    if (!inPenaltyBox[currentPlayer]) {
      correctAnswer();
    }
  };

  var nextPlayer = function () {
    currentPlayer += 1;
    if (currentPlayer == players.length) {
      currentPlayer = 0;
    }
  };

  var correctAnswer = function () {
    logToOutput("Answer was correct!!!!");
    purses[currentPlayer] += 1;
    logToOutput(players[currentPlayer] + " now has " +
      purses[currentPlayer] + " Gold Coins.");
  }
  
  var wrongAnswer = function () {
    logToOutput('Question was incorrectly answered');
    logToOutput(players[currentPlayer] + " was sent to the penalty box");
    inPenaltyBox[currentPlayer] = true;
  
    currentPlayer += 1;
    if (currentPlayer == players.length) {
      currentPlayer = 0;
    }
    return true;
  };

  var currentCategory = function () {
    if (places[currentPlayer] == 0)
      return 'Pop';
    if (places[currentPlayer] == 4)
      return 'Pop';
    if (places[currentPlayer] == 8)
      return 'Pop';
    if (places[currentPlayer] == 1)
      return 'Science';
    if (places[currentPlayer] == 5)
      return 'Science';
    if (places[currentPlayer] == 9)
      return 'Science';
    if (places[currentPlayer] == 2)
      return 'Sports';
    if (places[currentPlayer] == 6)
      return 'Sports';
    if (places[currentPlayer] == 10)
      return 'Sports';
    return 'Rock';
  };

  this.createRockQuestion = function (index) {
    return "Rock Question " + index;
  };

  for (var i = 0; i < 50; i++) {
    popQuestions.push("Pop Question " + i);
    scienceQuestions.push("Science Question " + i);
    sportsQuestions.push("Sports Question " + i);
    rockQuestions.push(this.createRockQuestion(i));
  };

  this.isPlayable = function (howManyPlayers) {
    return howManyPlayers >= 2;
  };

  this.add = function (playerName) {
    players.push(playerName);
    places[this.howManyPlayers() - 1] = 0;
    purses[this.howManyPlayers() - 1] = 0;
    inPenaltyBox[this.howManyPlayers() - 1] = false;

    logToOutput(playerName + " was added");
    logToOutput("They are player number " + players.length);

    return true;
  };

  this.howManyPlayers = function () {
    return players.length;
  };


  var askQuestion = function (counter) {
    if (currentCategory() == 'Pop') {
      logToOutput(popQuestions.shift());
    }
    if (currentCategory() == 'Science') {
      logToOutput(scienceQuestions.shift());
    }
    if (currentCategory() == 'Sports') {
      logToOutput(sportsQuestions.shift());
    }
    if (currentCategory() == 'Rock') {
      logToOutput(rockQuestions.shift());
    }

    if ((counter % 10) == this.goodAnswer) {
      notAWinner = wrongAnswer();
    } else {
      notAWinner = wasCorrectlyAnswered();
    }
  };

  this.roll = function (roll, counter) {
    logToOutput(players[currentPlayer] + " is the current player");
    logToOutput("They have rolled a " + roll);

    if (inPenaltyBox[currentPlayer]) {
      if (roll % 2 != 0) {
        isGettingOutOfPenaltyBox = true;

        logToOutput(players[currentPlayer] + " is getting out of the penalty box");
        movePlayer(roll);

        logToOutput(players[currentPlayer] + "'s new location is " + places[currentPlayer]);
        logToOutput("The category is " + currentCategory());
        askQuestion(counter);
      } else {
        logToOutput(players[currentPlayer] + " is not getting out of the penalty box");
        isGettingOutOfPenaltyBox = false;
      }
    } else {
      movePlayer(roll);

      logToOutput(players[currentPlayer] + "'s new location is " + places[currentPlayer]);
      logToOutput("The category is " + currentCategory());
      askQuestion(counter);
    }
  };


  var winner = didPlayerWin();
  nextPlayer();
  return winner;
};




var correctAnswer = function () {
  logToOutput("Answer was correct!!!!");
  purses[currentPlayer] += 1;
  logToOutput(players[currentPlayer] + " now has " +
    purses[currentPlayer] + " Gold Coins.");
}

var wrongAnswer = function () {
  logToOutput('Question was incorrectly answered');
  logToOutput(players[currentPlayer] + " was sent to the penalty box");
  inPenaltyBox[currentPlayer] = true;

  currentPlayer += 1;
  if (currentPlayer == players.length) {
    currentPlayer = 0;
  }
  return true;
};



exports.gameStart = function (numberOfPlayers, playerRolls, goodAnswer) {

  var hash = '';
  var notAWinner = false;
  var game = new Game(numberOfPlayers);

  for (i = 0; i < numberOfPlayers; i++) {
    game.add('Player' + i);
  }

  var counter = 0;

  do {
    // Math.floor(Math.random() * 6) + 1
    // Math.floor(Math.random() * 10) == 7
    // var roll = 
    game.roll(playerRolls[counter], counter);


    counter++;
  } while (notAWinner);
  hash = crypto.createHash('md5').update(outputLog).digest('hex');
  console.log(outputLog);
  return outputLog.replace(/ /g, '');
}