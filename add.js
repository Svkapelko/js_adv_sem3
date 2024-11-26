
const title = document.getElementById('title');
const review = document.getElementById('review');
const button = document.getElementById('button');
const key = 'reviews';


function addReview() {
	var reviews = JSON.parse(localStorage.getItem(key));
	if (reviews == "" || reviews == null) {
		reviews = [];
	}
	const item = {
		title: title.value,
		review: review.value
	};
	reviews.push(item);
	localStorage.setItem(key, JSON.stringify(reviews)); 
}

button.addEventListener('click', () => {
	addReview();
	title.value = "";
	review.value = "";
});
