const isFull = (data) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {           
            if(data[i][j] === '') return false;
        }
    }

    return true;
}

export default isFull;