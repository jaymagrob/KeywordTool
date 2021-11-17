const { removeB } = require('./removeTags');

function formatGoogleData(data) {
  if (!Array.isArray(data)) {
    return new Error('Data is wrong');
  }
  const dataArray = data[0];

  if (!Array.isArray(dataArray)) {
    return new Error('Data is wrong');
  }

  return dataArray.map((item) => removeB(item[0]));
}

module.exports = { formatGoogleData };
