import findBestMove from "./Minimax";

const enemyMove = (data,isHard) => {
    let temp = data;

    if(isHard){
        const {x,y} = findBestMove(temp);
        temp[x][y] = 'x';
    }else{
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {           
                if(temp[i][j] === ''){
                    temp[i][j]= 'x';
                    return temp;
                } 
            }
        }
    }

    return temp;
}

export default enemyMove;