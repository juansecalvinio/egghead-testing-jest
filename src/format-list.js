export default formatList;

function formatList(listName, items, key) {
  return `These are items in the ${listName}:${
    items.reduce((itemList, item) => {
      return `${itemList}\n - ${key ? item[key] : item}`
    }, '')
  }`
}