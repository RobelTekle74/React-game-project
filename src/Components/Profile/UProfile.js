import React, { Component } from "react"
import axios from "axios";
import Board from "../Board/Board";
import { userInfo } from "os";
import Easy from '../GameModes/Easy'
import { BrowserRouter as Route, Link } from "react-router-dom";
import './UProfile.css'
import flatten from 'lodash/flatten';
import range from 'lodash/range';
import includes from 'lodash/includes';
import cloneDeep from 'lodash.clonedeep'


const VALUES = range(1, 10);
const DIM = range(0, 9);
const ZERO = 0;

const getRow = (grid, rowNum) => {
	if (!includes(DIM, rowNum)) {
		throw new Error('rowNum not in range');
	}
	return grid[rowNum];
}

const getCol = (grid, colNum) => {
	if (!includes(DIM, colNum)) {
		throw new Error('colNum not in range');
	}
	return grid.map((row) => row[colNum]);
}

const getSquare = (grid, rowNum, colNum) => {
	if (!includes(DIM, rowNum) || !includes(DIM, colNum)) {
		throw new Error('rowNum or colNum are not in range');
	}
	let rowStart = rowNum - (rowNum % 3); // uppermost row index of the box
	let colStart = colNum - (colNum % 3); // leftmost col index of the box
	let result = [];
	for (let i = 0; i < 3; i++) {
		result[i] = result[i] || [];
		for (let j = 0; j < 3; j++) {
			result[i].push(grid[rowStart + i][colStart + j]);
		}
	}
	return flatten(result);
}

/*
	sudoku constraints checker
	- unique in its row
	- unique in its column
	- unique in its box
*/ 
const check = (grid, number, rowNum, colNum) => {
	if (!includes(DIM, rowNum) || !includes(DIM, colNum)) {
		throw new Error('rowNum or colNum are not in range');
	}

	if (!includes(VALUES, number)) {
		throw new Error('number is not in range');
	}

	let row = getRow(grid, rowNum);
	let column = getCol(grid, colNum);
	let square = getSquare(grid, rowNum, colNum);

	if (!includes(row, number) && !includes(column, number) && !includes(square, number)) {
		return true;
	}

	return false;
}

/*
	starts from 0x0 and moves left to right and row by row to 9x9
*/
const getNext = (rowNum = 0, colNum = 0) => {
	return colNum !== 8 ? [rowNum, colNum + 1] :
		rowNum !== 8 ? [rowNum + 1, 0] :
		[0, 0];
}

const solver = (grid, rowNum = 0, colNum = 0) => {
	if (includes(DIM, rowNum) < 0 || includes(DIM, colNum) < 0) {
		throw new Error('rowNum or colNum are not in range');
	}
	let isLast = (rowNum >= 8 && colNum >= 8);

	/* if the box is not empty, run the solver on the next box */
	if (grid[rowNum][colNum] !== ZERO && !isLast) {
		let [nextRowNum, nextColNum] = getNext(rowNum, colNum);
		return solver(grid, nextRowNum, nextColNum);
	}
	/*
		if the box is empty, check to see out of numbers 1 to 9,
		which one satisfies all three sudoko constraints
	*/ 
	for (let i = 1; i <= 9; i++) {
		if (check(grid, i, rowNum, colNum)) {
			grid[rowNum][colNum] = i;
			let [nextRowNum, nextColNum] = getNext(rowNum, colNum);
			/*
				runs the solver recusively until it sucessfully
				reaches to the end of the grid, box 9x9
			*/
			if (!nextRowNum && !nextColNum) { // at index [8, 8], next would be [0, 0]
				return true;
			}
			if (solver(grid, nextRowNum, nextColNum)) {
				return true;
			}
		}
	}

	/*
		if the loop could not solve and return the function,
		false will be retuened which indicates the sudoku is not solvable.
		resets the current state back to 0 allow for further tries
	*/
	grid[rowNum][colNum] = ZERO;
	return false;
}

const isSolvable = (grid) => {
	let clonedGrid = cloneDeep(grid);
	return solver(clonedGrid);
}

/*
	If each of the numbers from 1 to 9 are repeated on the grid 9 times
	indicates the suduko is completed/solved
*/
const isComplete = (grid) => {
	let values = flatten(grid);
	let list = {};
	values.map((val) => list[val] = list[val] ? list[val] + 1 : 1);
	delete list['0'];
	var total = Object.keys(list).reduce((total, key) => total + list[key], 0);
	return total === 81 ? true : false;
}

class profile extends Component {
    constructor() {
        super();
        this.state = {
            users: {}
        }
        this.onClick = this.clickHandler.bind(this);
    }
    clickHandler(e) {
        e.preventDefault();
        
    }
    
    

    
    // axios calls
    componentDidMount () {
        axios.get('highscoressix.czi7s5zvjsvk.us-east-1.rds.amazonaws.com')
        .then(response => {
            // this.setState({user: response.data});
            console.log(response);
        });
    };

    render() {
        return (
            <div id="">
                <h1 style={{marginTop: 0}}>Welcome {this.state.users.userName}</h1>
                <div className = 'container'>
                <table id="board">
                    <tbody className="tableBody">
                        <tr >
                        <td id="r0c0" >8</td>
                        <td id="r0c1" ><input type="text" maxLength="1"></input> </td>
                        <td id="r0c2" ><input type="text" maxLength="1"></input> </td>
                        <td id="r0c3" >4 </td>
                        <td id="r0c4" ><input type="text" maxLength="1"></input> </td>
                        <td id="r0c5" >6 </td>
                        <td id="r0c6" ><input type="text" maxLength="1"></input> </td>
                        <td id="r0c7" ><input type="text" maxLength="1"></input> </td>
                        <td id="r0c8" >7 </td>
                        </tr>
                        <tr>
                        <td id="r1c0" ><input type="text" maxLength="1"></input> </td>
                        <td id="r1c1" ><input type="text" maxLength="1"></input> </td>
                        <td id="r1c2" ><input type="text" maxLength="1"></input> </td>
                        <td id="r1c3" ><input type="text" maxLength="1"></input> </td>
                        <td id="r1c4" ><input type="text" maxLength="1"></input> </td>
                        <td id="r1c5" ><input type="text" maxLength="1"></input> </td>
                        <td id="r1c6" >4 </td>
                        <td id="r1c7" ><input type="text" maxLength="1"></input> </td>
                        <td id="r1c8" ><input type="text" maxLength="1"></input> </td>
                        </tr>
                        <tr>
                        <td id="r2c0" ><input type="text" maxLength="1"></input> </td>
                        <td id="r2c1" >1 </td>
                        <td id="r2c2" ><input type="text" maxLength="1"></input> </td>
                        <td id="r2c3" ><input type="text" maxLength="1"></input> </td>
                        <td id="r2c4" ><input type="text" maxLength="1"></input> </td>
                        <td id="r2c5" ><input type="text" maxLength="1"></input> </td>
                        <td id="r2c6" >6 </td>
                        <td id="r2c7" >5 </td>
                        <td id="r2c8" ><input type="text" maxLength="1"></input> </td>
                        </tr>
                        <tr>
                        <td id="r3c0" >5 </td>
                        <td id="r3c1" ><input type="text" maxLength="1"></input> </td>
                        <td id="r3c2" >9 </td>
                        <td id="r3c3" ><input type="text" maxLength="1"></input> </td>
                        <td id="r3c4" >3 </td>
                        <td id="r3c5" ><input type="text" maxLength="1"></input> </td>
                        <td id="r3c6" >7 </td>
                        <td id="r3c7" >8 </td>
                        <td id="r3c8" ><input type="text" maxLength="1"></input> </td>
                        </tr>
                        <tr>
                        <td id="r4c0" ><input type="text" maxLength="1"></input> </td>
                        <td id="r4c1" ><input type="text" maxLength="1"></input> </td>
                        <td id="r4c2" ><input type="text" maxLength="1"></input> </td>
                        <td id="r4c3" ><input type="text" maxLength="1"></input> </td>
                        <td id="r4c4" >7 </td>
                        <td id="r4c5" ><input type="text" maxLength="1"></input> </td>
                        <td id="r4c6" ><input type="text" maxLength="1"></input> </td>
                        <td id="r4c7" ><input type="text" maxLength="1"></input> </td>
                        <td id="r4c8" ><input type="text" maxLength="1"></input> </td>
                        </tr>
                        <tr>
                        <td id="r5c0" ><input type="text" maxLength="1"></input> </td>
                        <td id="r5c1" >4 </td>
                        <td id="r5c2" >8 </td>
                        <td id="r5c3" ><input type="text" maxLength="1"></input> </td>
                        <td id="r5c4" >2 </td>
                        <td id="r5c5" ><input type="text" maxLength="1"></input> </td>
                        <td id="r5c6" >1 </td>
                        <td id="r5c7" ><input type="text" maxLength="1"></input> </td>
                        <td id="r5c8" >3 </td>
                        </tr>
                        <tr>
                        <td id="r6c0" ><input type="text" maxLength="1"></input> </td>
                        <td id="r6c1" >5 </td>
                        <td id="r6c2" >2 </td>
                        <td id="r6c3" ><input type="text" maxLength="1"></input> </td>
                        <td id="r6c4" ><input type="text" maxLength="1"></input> </td>
                        <td id="r6c5" ><input type="text" maxLength="1"></input> </td>
                        <td id="r6c6" ><input type="text" maxLength="1"></input> </td>
                        <td id="r6c7" >9 </td>
                        <td id="r6c8" ><input type="text" maxLength="1"></input> </td>
                        </tr>
                        <tr>
                        <td id="r7c0" ><input type="text" maxLength="1"></input> </td>
                        <td id="r7c1" ><input type="text" maxLength="1"></input> </td>
                        <td id="r7c2" >1 </td>
                        <td id="r7c3" ><input type="text" maxLength="1"></input> </td>
                        <td id="r7c4" ><input type="text" maxLength="1"></input> </td>
                        <td id="r7c5" ><input type="text" maxLength="1"></input> </td>
                        <td id="r7c6" ><input type="text" maxLength="1"></input> </td>
                        <td id="r7c7" ><input type="text" maxLength="1"></input> </td>
                        <td id="r7c8" ><input type="text" maxLength="1"></input> </td>
                        </tr>
                        <tr>
                        <td id="r8c0" >3 </td>
                        <td id="r8c1" ><input type="text" maxLength="1"></input> </td>
                        <td id="r8c2" ><input type="text" maxLength="1"></input> </td>
                        <td id="r8c3" >9 </td>
                        <td id="r8c4" ><input type="text" maxLength="1"></input> </td>
                        <td id="r8c5" >2 </td>
                        <td id="r8c6" ><input type="text" maxLength="1"></input> </td>
                        <td id="r8c7" ><input type="text" maxLength="1"></input> </td>
                        <td id="r8c8" >5 </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )

    }
}
export default profile;
