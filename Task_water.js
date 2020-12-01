
function сountWater (walls){
    let heightRock = {};
    let waterSum = 0;
    for(let x = 0; x < walls.length; x++){
        for(let y = 0; y < walls[x]; y++){
            let height = y+'';
            waterSum += height in heightRock  ? (x - heightRock [height]) - 1  : 0;
            heightRock [height] = x;
        }
    } 
    return waterSum;
}
let walls = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]
let myResult = сountWater(walls);
console.log(myResult);