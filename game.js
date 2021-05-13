import {fetchClueJson} from './getClue.js'
fetchClueJson(100, 1)

//clickhandlers for cell
const cellIdStr = (cat, value) => `cell_${cat}_${value}`
const cellTBody = document.getElementById('tbody-cell');





cellTBody.addEventListener('click', event => {
  const idStr = event.target.id
  let cell, category, value
  [cell, category, value] = idStr.split('_')
})
