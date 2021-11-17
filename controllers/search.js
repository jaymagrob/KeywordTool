const { getGoogleData } = require('../lib/getGoogleData');
const { formatGoogleData } = require('../lib/formatGoogleData');

const alphaAfter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function find(req, res) {
  const {
    country, sdfsdfm, query, checks,
  } = req.body;

  Promise.all(alphaAfter.map((i) => getGoogleData(`${query} ${i}`, checks)))
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err.message));
}

module.exports = { find };
