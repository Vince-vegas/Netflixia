//Divide, Algorithm, Pagination, Basic Arithmitic Math

// This function will determined the number of every pagination on every Pages
// Some of Api in TMDB are not completed in one request
// eg. one request should have 20 some of them has only 15

// default numEnd = 24

// e.g If genres data is total 24 the total pagination should be 1 if numEnd is 24
// eg. If the Genres Data is total 48 || 30 the total pagination should be 2

export const onTotalPaginate = (moviesArray, numEnd = 24) => {
  const totalLength = Math.ceil(moviesArray.length / numEnd);
  let totalPaginate = [];

  for (var i = 1; i <= totalLength; i++) {
    totalPaginate.push(i);
  }

  return totalPaginate;
};
