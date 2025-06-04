// this is far from the best option...
const removeFromArray = function(arr, ...forbiddenEl) {
  const forbidden = [...forbiddenEl]
    for(let i = 0; i < forbidden.length; i++) {
      console.log(forbidden[i])
      arr = arr.filter(element => element !== forbidden[i])
        console.log(arr)
    }
    return arr;
};

/* 
    This is the best option!

        Look around open your eyes!
    Instead of going through forbidden elements we go througho
    and checking if some element in array is equal to forbidden el

        Marvelous!
    We going through original array and check if some element is 
    in forbiddenArray

function removeFromArray (arr, ...args) {
    return arr.filter(element => !args.includes(element))
}
*/

// Do not edit below this line
module.exports = removeFromArray;
