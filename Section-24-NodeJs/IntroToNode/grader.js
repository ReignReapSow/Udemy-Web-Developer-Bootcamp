function average(scores){
    //add all scores together
    var total=0;
    scores.forEach(function(score){
        total+= score;
    });
    //divide by total number of scores
    var avg = total/scores.length

    //round average
    return Math.round(avg);

}





console.log("Average score for environment science");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log("Avg Score: " +average(scores)); //should return 94

console.log("Average score for organic");
var scores = [40, 65, 77, 82, 73, 63, 95, 49];
console.log("Avg Score: " +average(scores)); //should return 68