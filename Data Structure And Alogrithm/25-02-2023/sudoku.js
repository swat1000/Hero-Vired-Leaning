var isValidSudoku = function(board){
    let set1 = new Set();
    for(let i=0; i <board.length; i++){
        for(let j=0; j< board[0].length; j++){
            const val1 = board[i][j];
            if(val1 != "."){
                const row = `${val1} at row${i}`
                const col = `${val1} at row${j}`
                const box = `${val1} at box${Math.floor(i/3)}, ${Math.floor(j/3)}`

                if(set1.has(row) || set1.has(col) || set1.has(box)){
                    return false;
                }else {
                    set1.add(row);
                    set1.add(col);
                    set1.add(box);
                }
            }
        }
    }
    return true;
};
