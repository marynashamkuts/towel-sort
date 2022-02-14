module.exports = function towelSort (matrix = []) {
  let countLength = matrix.length;
  let arr = [];
  for (let i = 0; i < countLength; i++) {
      if (i % 2 !== 0) matrix[i] = matrix[i].reverse();
      arr = arr.concat(matrix[i]);
  }
  return arr;
}
