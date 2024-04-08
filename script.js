const nums = document.querySelectorAll('span');
const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const replay = document.getElementById('replay');

showAnimation();

function resetDOM() {
	final.classList.remove('show');
	nums[0].classList.add('in');
}

function showAnimation() {
	nums.forEach((num) => {
		num.addEventListener('animationend', (e) => {
			num.classList.remove('in');
			if (num.nextElementSibling) {
				num.nextElementSibling.classList.add('in');
			} else {
				final.classList.add('show');
			}
		});
	});
}

replay.addEventListener('click', () => {
	resetDOM();
	showAnimation();
});
