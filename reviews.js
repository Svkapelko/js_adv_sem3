
const allReviews = document.getElementById("all-reviews");
const key = 'reviews';

function showProductTitle() {
	const params = new URLSearchParams(location.search);
	title.textContent = params.get("product");
}

showProductTitle();

function showProductReviews() {
	const params = new URLSearchParams(location.search);
	const product = params.get("product");

	var reviews = JSON.parse(localStorage.getItem(key));
	if (reviews == "" || reviews == null) {
		reviews = [];
	}
	allReviews.textContent = "";
	for (let i = 0; i < reviews.length; i++) {
		let item = reviews[i];
		if (item.title == product) {
			allReviews.innerHTML += `
<p>Отзыв: ${item.review}</p>
<button onclick="removeReview(${i})">Удалить отзыв</button>
<hr>
			`;
		};
	};
	if (allReviews.textContent.length == 0) {
		allReviews.textContent = "Отзывов по товару ещё нет";
	}
}

showProductReviews();

function removeReview(i) {
	var reviews = JSON.parse(localStorage.getItem(key));
	reviews.splice(Number(i), 1);
	localStorage.setItem(key, JSON.stringify(reviews));
	location.reload();
}
