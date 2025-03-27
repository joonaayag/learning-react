import { WINNER_COMBOS } from "../constants.js"
export const checkWinnerFrom = (boardToCheck) => {
   for(const combo of WINNER_COMBOS){
     const [a, b, c] = combo
    // Check if there is a winner
     if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
     ) {
      return boardToCheck[a]
     }  

   }

   //No winner
   return null

}

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }