// Code your solution in this file!
function distanceFromHqInBlocks(startingBlock){
  const hqBlock = 42
  
  return Math.abs(startingBlock - hqBlock)
}

function distanceTravelledInFeet(startingBlock, endingBlock){
  
  const blockLengthInFeet = 264
  return Math.abs(startingBlock - endingBlock) * blockLengthInFeet
}

function 