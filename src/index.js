module.exports = function longestConsecutiveLength(array) {
  let bigArray = new Array(999999);
  array.forEach(item => {
    bigArray[item] = item;
  });
  let maxConsecutive = [];
  let proceed = false;
  let counter = 1;
  let previous = -999;
  bigArray.forEach(item => {
    if(proceed) {
      counter++;
    } else {
      maxConsecutive.push(counter);
      counter = 1;
    }
    proceed = previous + 1 == item;
    previous = item;
  });
  if(proceed){
    maxConsecutive.push(counter);
  } 
  return Math.max(...maxConsecutive, 0);
}
