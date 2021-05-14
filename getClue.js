const api = 'https://jservice.io/api/clues'

// `/?value=${valueInput}&category=${catIdInput}`

const getClueValueCat = async (valueInput, catIdInput) => {
  const result = await fetch(`https://jservice.io/api/clues/?value=${valueInput}&category=${catIdInput}`)
  const json = await result.json()
  return json;
}


const jsonHandler = async fetchJson => {
  let obj = {}
  const json = await fetchJson
  obj.question = json[0].question
  obj.answer = json[0].answer
  obj.clueCount = json[0].category.clues_count
  obj.invalidCount = json[0].invalid_count
  return obj
}

export const fetchClueJson = async (valueInput, catIdInput) => {
  const json = await getClueValueCat(valueInput, catIdInput)
  const obj = await jsonHandler(json)
  return obj
}