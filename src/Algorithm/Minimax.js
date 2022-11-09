import evaluate from "./Evaluate";

class Move
{
    constructor(){
        let x,y;
    }
}

const canMove = (data) => {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if(data[i][j] === '') return true;
        }    
    }
    
    return false;
}

const minimax = (data,depth,isMax) => {
    let score = evaluate(data);
  
    if (score === 'x') return 1;
  
    if (score === 'o') return -1;
  
    if (canMove(data) === false) return 0;
  
    if (isMax){
        let best = -1000;

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if (data[i][j]==='')
                {
                    data[i][j] = 'x';
                    best = Math.max(best, minimax(data, depth + 1, !isMax));

                    data[i][j] = '';
                }
            }
        }
        return best;
    }
    else
    {
        let best = 1000;

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                 
                if (data[i][j] === '')
                {
                    data[i][j] = 'o';
                    best = Math.min(best, minimax(data, depth + 1, !isMax));
  
                    data[i][j] = '';
                }
            }
        }
        return best;
    }
}

function findBestMove(data)
{
    let bestVal = -1000;
    let bestMove = new Move();
    bestMove.x = -1;
    bestMove.y = -1;
  
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
            if (data[i][j] === '')
            {
                data[i][j] = 'x';
                let moveVal = minimax(data, 0, false);

                data[i][j] = '';
  
                if (moveVal > bestVal)
                {
                    bestMove.x = i;
                    bestMove.y = j;
                    bestVal = moveVal;
                }
            }
        }
    }
  
    return bestMove;
}

export default findBestMove;