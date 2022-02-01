const GetGoogle = require('../lib/Google');
const Word = require('../lib/Words');

function find(req, res) {
  const {
    country, query, checks,
  } = req.params;

  Word.getWords(query, new GetGoogle(query, country).getData)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err.message));
}

module.exports = { find };
