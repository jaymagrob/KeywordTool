import GetGoogle from "../lib/Google";
import Word from "../lib/Words";

export function find(req, res) {
  const { country, query, checks } = req.params;

  Word.getWords(query, new GetGoogle(query, country).getData)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err.message));
}
