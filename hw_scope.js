// Episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

//- I tough it will be Miss Scarlet
//- Output - The murder is Miss Scarlet - as above as all variables are in the same block,
// they are in scope.

// Episode 2

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// - I thought I will get an error as the "murderer" has been reassigned "murderer = 'Mrs. Peacock';"
//   and we can't reassigne const.
// - Output: Error - Assigment to constant variable. - got the error message
//   we can't reassigne const to a new variable

// Episod 3

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// - I thought it will come back with and error - I was wrong.
// - Output: First Verdict - The murderer is Mr Peacock.
//           Second Verdict - The murdere is Professor Plum.
// - I guess because the let is in the function it allowed the code to change the murderer.

// Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// - I tought it will be: miss scarlet, professor plum, colonel mustard. / suspect three is mrs peacock.
// - Output - The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
//   Suspect three is Mrs. Peacock.
//- In the function let only changes the 3rd murderer, console.log(`Suspect three is ${suspectThree}.`);
//  will check let suspectThree = 'Mrs. Peacock'.

// Episode 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// - I thought it will be: The weapon is the Revolver.
// - Output: the same as above.
//   It was a lucky guess because I'm not sure why.

// Episode 6

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// - My guess is - The murderer is Mr Green - I was wrong.
// - Output: The murderer is Mrs White. - I think it runs the changeMurderer function and as the function
// plotTwist is on the same level it change the murderer again before it called the "verdict"?

// Episode 7

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// - My guess is - The murderer is Professor Plum.
// - Output: The murderer is Mr Green. - I"m not sure why, my guess is that when changeMurderer function runs
// it changes the murderer but plotTwist is out of scope, it doesn't run.


//Episode 8
//
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// //
// // - I think it will be (I can't even guess), maybe an error.
// // - Outcome: The weapon is Candle Stick. it runs all the functions within the block.....

//Episode 9

// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);
//
// - Answer I think - The murderer is Professor Plum. -
// - Outcome: The murderer is Professor Plum. - professor plum is a global variable,
//   mrs peacock is out of the scope as it is in the if statment.
