const { getGoogleData } = require('./lib/getGoogleData.js');

async function getStuff() {
  const alphaAfter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const questionsBefore = ['when', 'will', 'what', 'how', 'where', 'why', 'are', 'who', 'which', 'can'];
  const prepositionsAfter = ['can', 'for', 'to', 'near', 'is', 'without', 'with'];
  const comparisonsAfter = ['like', 'or', 'versus', 'vs', 'and'];
  const priceBefore = ['cheapest', 'cheap', 'best'];
  const topBefore = ['top 10', 'top 5', 'top 3', 'top'];
  const one = ['skateboard']; // first testing

  const results = {};
  for (const item of one) {
    const r = await getGoogleData(item);
    console.log(r);
    results[item] = r[0];
  }

  console.log(results);
  return results;
}

getStuff();
