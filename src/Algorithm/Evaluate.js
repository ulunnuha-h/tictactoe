const evaluate = (data) => {
    for (let i = 0; i < 3; i++) {
        if(data[i][0] == data[i][1] && data[i][0] == data[i][2]){
            return data[i][0];
        }

        if(data[0][i] == data[1][i] && data[0][i] == data[2][i]){
            return data[0][i];
        }
    }

    if(data[0][0] == data[1][1] && data[0][0] == data[2][2]) return data[0][0];

    if(data[2][0] == data[1][1] && data[2][0] == data[0][2]) return data[0][2];

    return '';
}

export default evaluate;