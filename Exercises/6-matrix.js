'use strict';

const max = (matrix) => {
  let maxValue = matrix[0][0];
  for(let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row [j];
      if (maxValue < cell) maxValue = cell;
    }
  }
  return maxValue;
};

module.exports = { max };
