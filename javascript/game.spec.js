// import { gameStart } from './game.js';

// import { GameStart, hash } from './game.js';

require('./game.js');



describe("The test environment", function () {
  it("should pass", function () {
    expect(true).toBe(true);
  });

  it("should access game", function () {
    expect(gameStart).toBeDefined();
  });
});

describe("NUmber of player is 3", function () {
  it("should pass", function () {
    var hash = gameStart(3, [4, 6, 2, 3], 7);
    expect(`Player0 was added
    They are player number 1
    Player1 was added
    They are player number 2
    Player2 was added
    They are player number 3
    Player0 is the current player
    They have rolled a 4
    Player0's new location is 4
    The category is Pop
    Pop Question 0
    Answer was correct!!!!
    Player0 now has 1 Gold Coins.
    Player1 is the current player
    They have rolled a 6
    Player1's new location is 6
    The category is Sports
    Sports Question 0
    Answer was correct!!!!
    Player1 now has 1 Gold Coins.
    Player2 is the current player
    They have rolled a 2
    Player2's new location is 2
    The category is Sports
    Sports Question 1
    Answer was correct!!!!
    Player2 now has 1 Gold Coins.
    Player0 is the current player
    They have rolled a 3
    Player0's new location is 7
    The category is Rock
    Rock Question 0
    Answer was correct!!!!
    Player0 now has 2 Gold Coins.
    Player1 is the current player
    They have rolled a undefined
    Player1's new location is NaN
    The category is Rock
    Rock Question 1
    Answer was correct!!!!
    Player1 now has 2 Gold Coins.
    Player2 is the current player
    They have rolled a undefined
    Player2's new location is NaN
    The category is Rock
    Rock Question 2
    Answer was correct!!!!
    Player2 now has 2 Gold Coins.
    Player0 is the current player
    They have rolled a undefined
    Player0's new location is NaN
    The category is Rock
    Rock Question 3
    Answer was correct!!!!
    Player0 now has 3 Gold Coins.
    Player1 is the current player
    They have rolled a undefined
    Player1's new location is NaN
    The category is Rock
    Rock Question 4
    Question was incorrectly answered
    Player1 was sent to the penalty box
    Player2 is the current player
    They have rolled a undefined
    Player2's new location is NaN
    The category is Rock
    Rock Question 5
    Answer was correct!!!!
    Player2 now has 3 Gold Coins.
    Player0 is the current player
    They have rolled a undefined
    Player0's new location is NaN
    The category is Rock
    Rock Question 6
    Answer was correct!!!!
    Player0 now has 4 Gold Coins.
    Player1 is the current player
    They have rolled a undefined
    Player1 is getting out of the penalty box
    Player1's new location is NaN
    The category is Rock
    Rock Question 7
    Answer was correct!!!!
    Player1 now has 3 Gold Coins.
    Player2 is the current player
    They have rolled a undefined
    Player2's new location is NaN
    The category is Rock
    Rock Question 8
    Answer was correct!!!!
    Player2 now has 4 Gold Coins.
    Player0 is the current player
    They have rolled a undefined
    Player0's new location is NaN
    The category is Rock
    Rock Question 9
    Answer was correct!!!!
    Player0 now has 5 Gold Coins.
    Player1 is the current player
    They have rolled a undefined
    Player1 is getting out of the penalty box
    Player1's new location is NaN
    The category is Rock
    Rock Question 10
    Answer was correct!!!!
    Player1 now has 4 Gold Coins.
    Player2 is the current player
    They have rolled a undefined
    Player2's new location is NaN
    The category is Rock
    Rock Question 11
    Answer was correct!!!!
    Player2 now has 5 Gold Coins.
    Player0 is the current player
    They have rolled a undefined
    Player0's new location is NaN
    The category is Rock
    Rock Question 12
    Answer was correct!!!!
    Player0 now has 6 Gold Coins.
    `.replace(/ /g,'')).toEqual(hash);
  });
});

// describe("NUmber of player is 4", function () {
//   it("should pass", function () {
//     var hash = gameStart(4, [4, 6, 2, 3], 7);
//     expect("2259cd15cfd277946e537636b8269a4c").toEqual(hash);
//   });
// });

//   describe("Number of player is 5", function () {
//     it("should pass", function () {
//       var hash = gameStart(5, [4, 6, 2, 3], 7);
//       expect("26e120d772693f8f15e433d6b6586d4f").toEqual(hash);
//     });
//   });

//   describe("Number of player is 6", function () {
//     it("should pass", function () {
//       var hash = gameStart(6, [4, 6, 2, 3], 7);
//       expect("178bfde2b47602414f244a941ad3f9d6").toEqual(hash);
//     });
//   });

//   describe("Number of player is 7", function () {
//     it("should pass", function () {
//       var hash = gameStart(7, [4, 6, 2, 3], 7);
//       expect("3b529810a4aa0f56f32405317769bccd").toEqual(hash);
//     });
//   });

//   describe("Number of player is 8", function () {
//     it("should pass", function () {
//       var hash = gameStart(8, [4, 6, 2, 3], 7);
//       expect("34190809527fd1863eb14c7ec3e89e32").toEqual(hash);
//     });
//   });

//   describe("Number of player is 9", function () {
//     it("should pass", function () {
//       var hash = gameStart(9, [4, 6, 2, 3], 7);
//       expect("9a2f7bb43ef592a59a727651f4986f4b").toEqual(hash);
//     });
//   }); 
  
  
//   describe("Number of player is 10", function () {
//     it("should pass", function () {
//       var hash = gameStart(10, [4, 6, 2, 3], 7);
//       expect("77d23de8685615df0d55ccf68b7b0df1").toEqual(hash);
//     });
//   });
``