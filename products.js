
const productItems = ["iPhoneSE", "iPhoneX", "iPhone13Pro"];
const products = document.getElementById("products");


function showProducts() { 
	alert('YES')
	productItems.forEach((item) => {
		products.innerHTML += `
<h1>${item}</h1>
<p><a href="/add.html?product=${item}">Добавить отзыв</a></p>
<p><a href="/reviews.html?product=${item}">Посмотреть отзывы</a></p>
		`;
	});
};

showProducts();
