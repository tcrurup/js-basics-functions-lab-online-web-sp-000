const blockLengthInFeet = 264;
const hqBlock = 42;

// Code your solution in this file!
function distanceFromHqInBlocks(startingBlock){
  return Math.abs(startingBlock - hqBlock);
}

function distanceTravelledInFeet(startingBlock, endingBlock){
  return Math.abs(startingBlock - endingBlock) * blockLengthInFeet;
}

function distanceFromHqInFeet(startingBlock){
  return distanceFromHqInBlocks(startingBlock) * blockLengthInFeet;
}

function calculatesFarePrice(startingBlock, endingBlock){
  let fareDistance = distanceTravelledInFeet(startingBlock, endingBlock);
  let pricePerFoot = 0.02;
  
  if (fareDistance < 400) {
    return 0
  } else if (fareDistance >= 400 && fareDistance <= 2000) {
    return (fareDistance - 400) *pricePerFoot;   
  } else if (fareDistance > 2000 && fareDistance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}