import Category from './category.js'

export default class NewGame {
  constructor() {
    this.categoryArr = []
    this.setCatDom();
    this.valuesArr = [100, 200, 300, 400, 500]
  }
  setCatDom = () => {
    for (let i = 1; i < 6; i++) {
      this.categoryArr.push(new Category(i))
    }
  }
  //take in columnId(1-5) and return categoryId to fetch
  getCatIdFromColId = (colId) => {
    return this.categoryArr[colId].id
  }
  //take in rowId(1-5) and return value to fetch
  //rather than using the innerText...
  //we can use this to set different kind of rewards/score
  getValueFromRowId = (rowId) => {
    return this.valuesArr[rowId]
  }
}