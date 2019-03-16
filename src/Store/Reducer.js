let initialState = {
    board: '',
    isGameOver: false,
    winner: null
}


let checkGame = (board) => {
    let row1 = board.substring(0,8);
    let row2 = board.substring(9, 17);
    let row3 = board.substring(18, 26);
    let row4 = board.substring(27,35);
    let row5 = board.substring(36, 44);
    let row6 = board.substring(45, 53);
    let row7 = board.substring(54, 62);
    let row8 = board.substring(63, 71);
    let row9 = board.substring(72, 80);
    let col1 = board[0]+board[9]+board[18]+board[27]+board[36]+board[45]+board[54]+board[63]+board[72];
    let col2 = board[1]+board[10]+board[19]+board[28]+board[37]+board[46]+board[55]+board[64]+board[73];
    let col3 = board[2]+board[11]+board[20]+board[29]+board[38]+board[47]+board[56]+board[65]+board[74];
    let col4 = board[3]+board[12]+board[21]+board[30]+board[39]+board[48]+board[57]+board[66]+board[75];
    let col5 = board[4]+board[13]+board[22]+board[31]+board[40]+board[49]+board[58]+board[67]+board[76];
    let col6 = board[5]+board[14]+board[23]+board[32]+board[41]+board[50]+board[59]+board[68]+board[77];
    let col7 = board[6]+board[15]+board[24]+board[33]+board[42]+board[51]+board[60]+board[69]+board[78];
    let col8 = board[7]+board[16]+board[25]+board[34]+board[43]+board[52]+board[61]+board[70]+board[79];
    let col9 = board[8]+board[17]+board[26]+board[35]+board[44]+board[53]+board[62]+board[71]+board[80];
    let box1 = board[0]+board[9]+board[18]+board[1]+board[10]+board[19]+board[2]+board[11]+board[20];
    let box2 = board[0]+board[9]+board[18]+board[1]+board[10]+board[19]+board[2]+board[11]+board[20];
    let box3 = board[0]+board[9]+board[18]+board[1]+board[10]+board[19]+board[2]+board[11]+board[20];
    let box4 = board[0]+board[9]+board[18]+board[1]+board[10]+board[19]+board[2]+board[11]+board[20];
    let box5 = board[0]+board[9]+board[18]+board[1]+board[10]+board[19]+board[2]+board[11]+board[20];
    let box6 = board[0]+board[9]+board[18]+board[1]+board[10]+board[19]+board[2]+board[11]+board[20];
    let box7 = board[0]+board[9]+board[18]+board[1]+board[10]+board[19]+board[2]+board[11]+board[20];
    let box8 = board[0]+board[9]+board[18]+board[1]+board[10]+board[19]+board[2]+board[11]+board[20];
    let box9 = board[0]+board[9]+board[18]+board[1]+board[10]+board[19]+board[2]+board[11]+board[20];
    


    
    

    let boardIsFull = !board.includes('0');

    if (boardIsFull) {
        return "Keep Going. You got this."
    }

}

let reducer = (state = initialState, action) => {

    if (action.type === "WRITE_TO_SQUARE") {
        let { index, value } = action;

        let updatedBoard = state.board.split('').map((char, i) => {
            if (i === index) {
                return value;
            }
            return char
        }).join('');
        
        let winner = checkGame(updatedBoard) 

        return {
            board: updatedBoard,
            isGameOver: winner != "IN_PROGRESS",
            winner: winner
        }

    }

    return state;
}

export default reducer;