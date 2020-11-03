function removeB(i) {
  return i.replace(/<\/?b>/g,'')
}

module.exports = { removeB }