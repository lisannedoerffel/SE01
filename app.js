let inputPopulation = [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]
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

//amountOfNeighbors is a value on the heatmap (heatmap[k][l]=amountOfNeighbors), so it equals the number of neighbors
//inhabitant is a value on the inputPopulation, if inhabitant = 1 the cell is alive, 0 means it is dead



function lifeAndDeath (inhabitant, amountOfNeighbors){
    if (inhabitant === 1) {
        if (!(amountOfNeighbors == 2) &&  !(amountOfNeighbors == 3)){
            inhabitant = 0;
        }
    } 
    if(inhabitant === 0) {
        if (amountOfNeighbors==3){
            inhabitant = 1;
        }
    }
    return inhabitant;
}
// This is a test: 
// lifeAndDeath(0, 2) I excpect it to yield 0

// This was another test:
// let newInhabitant = lifeAndDeath(inputPopulation[0][2], heatmap[0][2])

newPopulation = [];

for (let k = 0; k < inputPopulation.length; k++){
    newPopulation[k] = [];
    for (let l= 0; l < inputPopulation[k].length; l++){
        newPopulation[k][l] = lifeAndDeath(inputPopulation[k][l], heatmap[k][l])
        }  
};

console.log(newPopulation)