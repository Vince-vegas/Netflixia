const genPaginationArray = (num) => {
  const numLength = num;
  let arr = [];
  for (let i = 1; i <= numLength; i++) {
    arr.push(i);
  }

  return arr;
};

export { genPaginationArray };
