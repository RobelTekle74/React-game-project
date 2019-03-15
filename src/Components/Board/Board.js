// import React, { Component } from "react"
// import Chunk from 'lodash.chunk';
// // import store from '../../Store/store';
// // import Controls from "../Controls/Controls"
// import "./Board.css"




// function newCell(i, j, value, editable) {
//     return {
//       value,
//       editable,
//       hasConflict: false,
//       i,
//       j
//     }
// }
  
// function newGame(cells, time) {
//     return {
//         cells,
//         time: time || new Date(0, 0, 0, 0, 0, 0, 0)
//     }
// }
  
// function markAllWithoutConflict(cells) {
//     for (var i = 0; i < 9; i++) {
//         for (var j = 0; j < 9; j++) {
//         cells[i][j].hasConflict = false;
//         }
//     }
// }
  
// function checkSubset(array) {
//     var nums = {};
//     for (var i = 0; i < 9; i++) {
//         if (array[i].value !== null && nums.hasOwnProperty(array[i].value)) {
//         array[i].hasConflict = true;
//         array[nums[array[i].value]].hasConflict = true;
//         }
//         nums[array[i].value] = i;
//     }
// }
  
// function checkConflicts(cells) {
//     markAllWithoutConflict(cells);

//     // check horizontal lines
//     for (var i = 0; i < 9; i++) {
//         var arr = [];
//         for (var j = 0; j < 9; j++) {
//         arr.push(cells[i][j]);
//         }
//         checkSubset(arr);
//     }
  
//     // check vertical lines
//     for (var j = 0; j < 9; j++) {
//       var arr = [];
//       for (var i = 0; i < 9; i++) {
//         arr.push(cells[i][j]);
//       }
//       checkSubset(arr);
//     }
  
//     // check squares
//     var c = cells;
    
//     checkSubset([c[0][0], c[0][1], c[0][2], c[1][0], c[1][1], c[1][2], c[2][0], c[2][1], c[2][2]]);
//     checkSubset([c[3][0], c[3][1], c[3][2], c[4][0], c[4][1], c[4][2], c[5][0], c[5][1], c[5][2]]);
//     checkSubset([c[6][0], c[6][1], c[6][2], c[7][0], c[7][1], c[7][2], c[8][0], c[8][1], c[8][2]]);
  
//     checkSubset([c[0][3], c[0][4], c[0][5], c[1][3], c[1][4], c[1][5], c[2][3], c[2][4], c[2][5]]);
//     checkSubset([c[3][3], c[3][4], c[3][5], c[4][3], c[4][4], c[4][5], c[5][3], c[5][4], c[5][5]]);
//     checkSubset([c[6][3], c[6][4], c[6][5], c[7][3], c[7][4], c[7][5], c[8][3], c[8][4], c[8][5]]);
  
//     checkSubset([c[0][6], c[0][7], c[0][8], c[1][6], c[1][7], c[1][8], c[2][6], c[2][7], c[2][8]]);
//     checkSubset([c[3][6], c[3][7], c[3][8], c[4][6], c[4][7], c[4][8], c[5][6], c[5][7], c[5][8]]);
//     checkSubset([c[6][6], c[6][7], c[6][8], c[7][6], c[7][7], c[7][8], c[8][6], c[8][7], c[8][8]]);
// }
  
// // checkConflicts must run first
// function isComplete(cells) {
//     for (var i = 0; i < 9; i++) {
//         for (var j = 0; j < 9; j++) {
//         var cell = cells[i][j];
//         if (cell.hasConflict || cell.value === null) {
//             return false;
//         }
//         }
//     }
//     return true;
// }
  
// function boardToGame(board) {
//     var array = [];
//     for (var i = 0; i < 81; i++) {
//         if (board[i] === '0') {
//         array.push(null);
//         } else {
//         array.push(parseInt(board[i]));
//         }
//     }
//     array = Chunk(array, 9);

//     var game = []
//         for (var i = 0; i < 9; i++) {
//             var line = [];
//             for (var j = 0; j < 9; j++) {
//             line.push(newCell(i, j, array[i][j], array[i][j] === null));
//             }
//             game.push(line);
//         }
//     return newGame(game, null);
// }
  
// var Sudoku = {
// newGame,
// newCell,
// checkConflicts,
// isComplete,
// boardToGame
// }


// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = Store.getState();
//   }

  

//   render() {
//     return (
//       <div className="container">
//         <table id="board">
//             <tbody className="tableBody">
//               <tr >
//                 <td id="r0c0" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r0c1" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r0c2" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r0c3" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r0c4" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r0c5" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r0c6" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r0c7" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r0c8" ><input type="text" maxLength="1"></input> </td>
//               </tr>
//               <tr>
//                 <td id="r1c0" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r1c1" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r1c2" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r1c3" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r1c4" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r1c5" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r1c6" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r1c7" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r1c8" ><input type="text" maxLength="1"></input> </td>
//               </tr>
//               <tr>
//                 <td id="r2c0" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r2c1" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r2c2" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r2c3" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r2c4" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r2c5" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r2c6" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r2c7" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r2c8" ><input type="text" maxLength="1"></input> </td>
//               </tr>
//               <tr>
//                 <td id="r3c0" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r3c1" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r3c2" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r3c3" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r3c4" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r3c5" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r3c6" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r3c7" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r3c8" ><input type="text" maxLength="1"></input> </td>
//               </tr>
//               <tr>
//                 <td id="r4c0" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r4c1" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r4c2" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r4c3" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r4c4" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r4c5" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r4c6" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r4c7" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r4c8" ><input type="text" maxLength="1"></input> </td>
//               </tr>
//               <tr>
//                 <td id="r5c0" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r5c1" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r5c2" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r5c3" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r5c4" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r5c5" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r5c6" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r5c7" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r5c8" ><input type="text" maxLength="1"></input> </td>
//               </tr>
//               <tr>
//                 <td id="r6c0" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r6c1" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r6c2" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r6c3" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r6c4" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r6c5" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r6c6" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r6c7" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r6c8" ><input type="text" maxLength="1"></input> </td>
//               </tr>
//               <tr>
//                 <td id="r7c0" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r7c1" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r7c2" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r7c3" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r7c4" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r7c5" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r7c6" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r7c7" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r7c8" ><input type="text" maxLength="1"></input> </td>
//               </tr>
//               <tr>
//                 <td id="r8c0" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r8c1" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r8c2" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r8c3" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r8c4" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r8c5" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r8c6" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r8c7" ><input type="text" maxLength="1"></input> </td>
//                 <td id="r8c8" ><input type="text" maxLength="1"></input> </td>
//               </tr>
//             </tbody>
//         </table>

        
//     </div>
//     );
//   }
// }
// function App(props) {
//       return (
//         <div>
//           {props.children}
          
//         </div>
//       );
// }



// export default Game;

// // class Board extends Component {
// //     render () {
// //         return (
            
// //         )
// //     }
// // }