//need to locate all the categories-name and its id
//loop through 100 counts and fetch and retrieve cat and id
const fetch = require('node-fetch')
const fetchCategories = async (catId) => {
  const result = await fetch(`https://jservice.io/api/category/?id=${catId}`)
  const json = await result.json()
  console.log(json);
}


const loopCat = i => {
  for (let i = 0; i < 100; i++) {
    fetchCategories(i)
  }
}

fetchCategories(1)



let catObj = {
  1: 'politics',
  10: 'childrens literature',
  11: 'trivia',
  12: 'ac/dc',
  13: 'inventions',
  14: 'ancient worlds',
  15: 'hollywood legends',
  16: 'cars',
  17: 'u.s. states',
  18: 'hard',
  19: 'landmarks',
  2: 'baseball',
  20: 'comedians',
  21: 'animals',
  22: 'number please',
  23: 'awards',
  24: 'movie trivia',
  25: 'science',
  26: 'fashion',
  27: 'silly songs',
  28: 'presidential firsts',
  29: 'andy',
  3: 'odd jobs',
  30: 'starts with b',
  31: 'the bible',
  32: 'toys & games',
  33: 'water sports',
  34: 'all that jazz',
  35: 'insects',
  36: 'colors',
  37: 'nursery rhymes',
  38: 'boxing',
  39: 'poe',
  4: 'movies',
  40: 'cable tv',
  41: 'first ladies',
  42: 'sports',
  43: 'foreign cuisine',
  44: 'lakes & rivers',
  45: 'folk music',
  46: 'hats',
  47: 'washington d.c.',
  48: 'a la cart',
  49: 'food',
  5: 'australia',
  50: 'u.s. history',
  51: '4-letter words',
  52: 'tv trivia',
  53: 'glass',
  54: '60s trivia',
  55: 'sport of kings',
  56: 'saintly cities',
  57: '6-letter words',
  58: 'super heroes',
  59: 'democrats',
  6: 'cat egory',
  60: 'broadway musicals',
  61: 'starts with c',
  62: 'colorful geography',
  63: 'gay blades',
  64: 'british isles',
  65: 'music',
  66: '1945',
  67: 'television',
  68: 'africa',
  69: 'first aid',
  7: 'u.s. cities',
  70: 'ben franklin',
  71: 'world leaders',
  72: 'radio',
  73: 'august',
  74: 'hot movies',
  75: 'islands',
  76: 'money',
  77: '1968',
  78: 'world capitals',
  79: 'foods',
  8: 'time',
  80: 'mammals',
  81: 'begins with l',
  82: 'gay 90s',
  83: 'potent potables',
  84: 'states in song',
  85: 'old testament',
  86: 'holidays',
  87: 'starts with q',
  88: 'geography',
  89: 'double talk',
  9: 'dining out',
  90: 'jacks of all trades',
  91: 'ships',
  92: 'b movies',
  93: 'fiction',
  94: 'mysteries',
  95: 'racy ladies',
  96: 'addresses',
  97: 'american literature',
  98: 'all numbers',
}

let randomCat = () => {
  let id = Math.floor(Math.random()*100)
  let catName = catObj[id];
  console.log([id, catName]);
  return [id, catName]
}

const updateCategoryDOM = (dom) => {
  let [id, catName] = randomCat()
  dom.innerHTML = catName;
  dom.value = id
}
