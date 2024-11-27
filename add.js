
const title = document.getElementById('title');
const review = document.getElementById('review');
const button = document.getElementById('button');
const key = 'reviews';

function showProductTitle() {
	const params = new URLSearchParams(location.search);
	title.textContent = params.get("product");
}


function addReview() {
	var reviews = JSON.parse(localStorage.getItem(key));
	if (reviews == "" || reviews == null) {
		reviews = [];
	}
	const item = {
		title: title.textContent,
		review: review.value
	};
	reviews.push(item);
	localStorage.setItem(key, JSON.stringify(reviews)); 
}

showProductTitle();

button.addEventListener('click', () => {
	addReview();
	review.value = "";
});
