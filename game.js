import {fetchClueJson} from './getClue.js'
import NewGame from './newGame.js'

//clickhandlers for cell
// const cellIdStr = (cat, value) => `cell_${cat}_${value}`
const cellTBody = document.getElementById('tbody-cell');
const game = new NewGame()


cellTBody.addEventListener('click', async event => {
  const idStr = event.target.id
  let [cell, colId, rowId] = idStr.split('_')
  //use colId and rowId to fetch with
  const catIdInput = game.getCatIdFromColId(colId)
  const valueInput = game.getValueFromRowId(rowId)
  const json = await fetchClueJson(valueInput, catIdInput)
  console.log(json);
})

const updateBoard = (json) => {

}