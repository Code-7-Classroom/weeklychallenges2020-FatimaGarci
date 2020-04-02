var run = exercise('running');
var swim = exercise('swimming');

function exercise (exerciseType){
  return ()=> {
    return "Today's exercise: " + exerciseType;
  };
}

console.log(run());
console.log(swim());