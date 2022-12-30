
const lengthList = document.querySelectorAll("li.item");
console.log(`Number of categories:${lengthList.length}`);

lengthList.forEach((item) => {
    console.log(`Category:${item.firstElementChild.textContent}`);
      console.log(`Elements: ${item.lastElementChild.children.length}`);
})
