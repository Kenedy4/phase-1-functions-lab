// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  const headquartersBlock = 42;
  return Math.abs(blockNumber - headquartersBlock);
}

function distanceFromHqInFeet(blockNumber) {
  const headquartersBlock = 42;
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(blockNumber - headquartersBlock);
  const distanceInFeet = distanceInBlocks * feetPerBlock;

  return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(destination - start);
  return distanceInBlocks * feetPerBlock;
}
function distanceTravelledInFeet(startBlock, destinationBlock) {
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(destinationBlock - startBlock);
  return distanceInBlocks * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
  const distance = Math.abs(destination - start);
  let farePrice;

  if (distance <= 1) {
    farePrice = 0;
  } else if (distance <= 6) {
    farePrice = 5;
  } else if (distance <= 10) {
    farePrice = (distance - 6) * 0.5 + 5;
  } else {
    farePrice = 25;
  }

  return farePrice;
}

function distanceTravelledInFeet(start, destination) {
  const blocks = Math.abs(start - destination);
  return blocks * 264; // 1 block = 264 feet
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
