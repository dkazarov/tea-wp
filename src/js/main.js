import { burgerOpen, burgerClose } from './js-components/burger';

const inputSearch = document.querySelector('#search-input');

const search = document.querySelector('#search-btn').addEventListener('click', () => {
	inputSearch.classList.toggle('max-w-180');
});

search();

burgerOpen();
burgerClose();
