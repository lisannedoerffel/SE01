let inputPopulation = [
    [0, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 0, 1]
];

function neighborCount(i, j) {
    let sum = 0;
    if(inputPopulation[i-1]){
        if(inputPopulation[i-1][j-1]){
            sum += inputPopulation[i-1][j-1]
        }
        if(inputPopulation[i-1][j]){
            sum += inputPopulation[i-1][j]
        }
        if(inputPopulation[i-1][j+1]){
            sum += (inputPopulation[i-1][j+1])
        }
    }
    if(inputPopulation[i][j-1]){
        sum += inputPopulation[i][j-1]
    }
    if(inputPopulation[i][j+1]){
        sum += (inputPopulation[i][j+1])
    }
    if(inputPopulation[i+1]){
        if(inputPopulation[i+1][j-1]){
            sum += inputPopulation[i+1][j-1]
        }
        if(inputPopulation[i+1][j]){
            sum += inputPopulation[i+1][j]
        }
        if(inputPopulation[i+1][j+1]){
            sum += (inputPopulation[i+1][j+1])
        }
    }
    // console.log(sum)
    return sum;
}

let heatmap = [];

for (let k = 0; k < inputPopulation.length; k++){
    heatmap[k] = [];
    for (let l= 0; l < inputPopulation[k].length; l++){
        heatmap[k][l] = neighborCount(k,l)
        }  
};

