const categoriesList = document.getElementById('categories');
categoriesList.classList.add('father-list');

const categories = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItemsLength = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItemsLength}`);
});

const items = document.querySelectorAll('#categories .item ul li');
items.forEach(item => {
    item.classList.add('category-item');
});

const headers = document.querySelectorAll('#categories .item h2');
headers.forEach(header => {
    header.classList.add('catergory-head');
});



