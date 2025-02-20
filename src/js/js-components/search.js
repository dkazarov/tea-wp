const inputSearch = document.querySelector('#search__input');
const searchBtn = document.querySelector('#search__btn');
const logo = document.querySelector('.logo');
const actionLeft = document.querySelector('.action__left');

export const search = () => {
	searchBtn.addEventListener('click', () => {
		let media768 = window.screen.width;

		inputSearch.classList.toggle('max-w-180');

		if (media768 <= 768) {
			logo.classList.toggle('--hide');
		}
		if (media768 <= 480) {
			logo.classList.toggle('--hide');
		}

		console.log(media768);
	});
};
