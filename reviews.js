
const allReviews = document.getElementById("all-reviews");
const key = 'reviews';


var reviews = JSON.parse(localStorage.getItem(key));
if (reviews == "" || reviews == null) {
	reviews = [];
	console.log('reviews-0.1', reviews);
}

if (reviews.length == 0) {
	allReviews.innerHTML = "Отзывов ещё нет";
} else {
	reviews.forEach((item) => {
		allReviews.innerHTML += `
<p>Товар: ${item.title}</p>
<p>Отзыв: ${item.review}</p>
<hr>
		`;
	});
}
