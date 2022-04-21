import React, { useState } from "react";
import { getRandom } from "./random";

const arr = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]

function GoodClick() {
  const [ans, setAns] = useState(arr[getRandom(arr.length-1)]);
console.log(ans.msg);  
  return (
    <>
      <button onClick={() => setAns(arr[getRandom(arr.length-1)])
      }>Think of a Question</button>
      <h3>Your Answer is:</h3>
      <h3 style={{color:ans.color}}> {ans.msg}</h3>
    </>
  );
}

export default GoodClick;



// const NumberGame = (props) => {
//   const genRandom = () => Math.floor(Math.random() * 10) + 1;
//   const restart = () => {
//   setTarget (genRandom)
//   8 setGuess(
//   }
//   const [guess, setGuess] = useState(genRandom());
//   const [target, setTarget] useState(genRandom());
//   const isWinner = target guess;
//   return (
//   <div className="NumberGame">
//   <h1>Target Num: {target} </h1>
//   <h1 className={isWinner ? 'winner' : 'loser'}>Your Guess: {guess)</h1>
//   {!isWinner &&
//   <button onClick= () => setGuess (genRandom()) >Generate Num</button>
//   }
//   <button onclick={restart]>New Game</button>
//   </div>
//   )
//   export default NumberGame;