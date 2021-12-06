export {onTitleClick} from './modal-film-description';
import {TmdbApiService, BASE_URL, API_URL} from './apiService';
import modalFilmDescription from '../modal-film-description.hbs'

const api = new TmdbApiService;

const refs = {
    modalRef: document.querySelector('.backdrop'),
    movieName: document.querySelectorAll('.film-card__title'),
    cardsMovieList: document.querySelector('.collection'),
    closeModal: document.querySelector('[data-modal-close]'),
    movieContent: document.querySelector('.modal'),
    createCardMovie: document.querySelector('.modal__content'),
};
refs.cardsMovieList.addEventListener('click', onTitleClick);
refs.closeModal.addEventListener('click', onMovieDescriptionDetailesClose)
refs.modalRef.addEventListener('click', onModalClick);
refs.cardsMovieList.addEventListener('click', onPictureClick);
refs.closeModal.addEventListener('click', onCloseModalClick);

// вызов
export default function onTitleClick(event) {
    event.preventDefault();
  api.id = event.target.closest('li').dataset.id;
  api.fetchDescribeMovie()
        .then(data => appendMovieCard(data))
        .catch(error => console.error);
  
    refs.modalRef.classList.remove('is-hidden');
    
  }
function onMovieDescriptionDetailesClose() {
  refs.modalRef.classList.add('is-hidden');
  refs.createCardMovie.innerHTML = '';
}
function appendMovieCard(movie) {
    return refs.createCardMovie.insertAdjacentHTML('beforeend', modalFilmDescription(movie));
  }

// открытие модалки при клике на картинку
function onPictureClick(evt) {
evt.preventDefault();
if (!evt.target.classList.contains('card-movie__img')) {
  return;
}
refs.modalRef.classList.remove('is-hidden');
// refs.createCardMovie.innerHTML = '';
// refs.createCardMovie.insertAdjacentHTML('afterbegin', modalMarkup(evt.path[3]));
}

// закрывается по кнопке
function onCloseModalClick() {
refs.modalRef.classList.add('is-hidden');
refs.movieContent.src = '';
}
// при клике на бэкдроп закрывается модалка
function onModalClick(evt) {
if (refs.modalRef === evt.target) {
  onMovieDescriptionDetailesClose();
  onCloseModalClick();
}
}
// при клике на ESC закрывается модалка
document.addEventListener('keydown', e => {
if (e.key === 'Escape') {
  onMovieDescriptionDetailesClose();
  onCloseModalClick();
}
});
