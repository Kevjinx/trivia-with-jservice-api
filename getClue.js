const fetch = require('node-fetch')

const api = 'https://jservice.io/api/clues'

// `/?value=${valueInput}&category=${catIdInput}`

const getClueValueCat = async (valueInput, catIdInput) => {
  const result = await fetch(`${api}/?value=${valueInput}&category=${catIdInput}`)
  const json = await result.json()
  console.log(json);
  return json;
}
