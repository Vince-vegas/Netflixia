// slice the array

// movieCollected
// for slicing array movies on:  Genre, HomeData, and actor movies

let movieSliceStart = (requiredNum) => requiredNum * 24 - 24;
let movieSliceEnd = (numStart) => movieSliceStart(numStart) + 24;

// topActorsCollect
// For Top people on Movie Industry

let actorSliceStart = (requiredNum) => requiredNum * 20 - 20;
let actorSliceEnd = (numStart) => actorSliceStart(numStart) + 20;

// =======================
// =======================

// COLLECT 20 ITEMS IN array: topActors
let sliceBy20 = (dataArray, requiredNum) => {
  return dataArray.slice(
    actorSliceStart(requiredNum),
    actorSliceEnd(requiredNum)
  );
};

// COLLECT 24 ITEMS IN array: movies
let sliceBy24 = (dataArray, requiredNum) => {
  return dataArray.slice(
    movieSliceStart(requiredNum),
    movieSliceEnd(requiredNum)
  );
};

// Suggested Movies is total of 20

// the function method
// slice by 12 on array suggested movies

const sliceSuggested = (arrayPara) =>
  arrayPara.filter((item, index) => index < 12);

export { sliceBy24, sliceBy20, sliceSuggested };
