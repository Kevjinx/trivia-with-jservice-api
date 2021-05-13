const fetch = require('node-fetch')

const api = 'https://jservice.io/api/clues'

// `/?value=${valueInput}&category=${catIdInput}`

const getClueValueCat = async (valueInput, catIdInput) => {
  const result = await fetch(`${api}/?value=${valueInput}&category=${catIdInput}`)
  const json = await result.json()
  console.log(json);
  return json;
}


const jsonHandler = async fetchJson => {
  let obj = {}
  const json = await fetchJson
  console.log(json);
  obj.question = json[0].question
  obj.answer = json[0].answer
  obj.clueCount = json[0].category.clues_count
  obj.invalidCount = json[0].invalid_count
  console.log(obj);
  return obj
}

jsonHandler(getClueValueCat(100, 1))
