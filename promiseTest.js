const { getGoogleData } = require('./lib/getGoogleData.js')

async function getStuff() {
  const alphaAfter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", 'z']
  const questionsBefore = ['when', 'will', 'what', 'how', 'where','why','are','who', 'which', 'can']
  const prepositionsAfter = ['can', 'for', 'to', 'near', 'is', 'without', 'with']
  const comparisonsAfter = ['like', 'or', 'versus', 'vs', 'and']
  const priceBefore = ['cheapest', 'cheap', 'best']
  const topBefore = ['top 10', 'top 5', 'top 3', 'top']

  let results = []
  for(const item of alpha) {
    const r = await getGoogleData(item)
    results.push({
      [item]: r[0][0],
    })
  }
  return results
}

getStuff().then(i => console.log('here', i))
