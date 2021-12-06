import imgTemp from '../film-card.hbs';
import createCardMovies from '../film-card.hbs';
import TmdbApiService from './apiService';
import { pagination } from './pagination';
import { btnScroll } from './btnUp'
// import trottle from 'lodash.throttle';

const api = new TmdbApiService();

export default function getRefs() {
    return {
      searchForm: document.querySelector('.header__form'),
      galleryList: document.querySelector('.collection'),
      error: document.querySelector('.wrong-request')
    };
  };
  const refs=getRefs()

// запрос данных для жанров
const genresArrayStr = [];
api
  .fetchGenres()
    .then(genres => {
      genres.forEach(el => {
        genresArrayStr.push(el);
        console.log(genres)
      });
     
  })
  
  .catch(onError);
console.log(genresArrayStr)
// Заменяет значение жанра на строку
function onRemoveGenres(data) {
  data.forEach(el => {
    el.genre_ids = onComparingArrayAndObject(el.genre_ids, genresArrayStr);
    return;
  });
}

//итерация числового массива 
function onComparingArrayAndObject(arr, obj) {
  let genresStr = [];
  arr.forEach(el => {
    const values = Object.values(obj);
    values.forEach(value => {
      if (value.id == el) {
        genresStr.push(' ' + value.name);
      }
    });
    return;
  });
  return genresStr;
}

// запрос на тренды
api
  .fetchFilms()
  .then(data => {
    onCreateMarkup(data);
//     console.log(data.results);
  })
  .catch(onError);

// перезаписывает значение даты
function onFilmReleaseYear(data) {
  data.forEach(el => {
    return (
      (el.release_date = onSliceNumber(el.release_date)) ||
      (el.first_air_date = onSliceNumber(el.first_air_date))
    );
  });
}
function onSliceNumber(release) {
  if (release == undefined) {
    return;
  }
  return release.slice(0, 4);
}
function normalRatingYearGenres(data) {
    onFilmReleaseYear(data.results);
    onRemoveGenres(data.results);
    
  }
  
  function onCreateMarkup(data) {
    data.results.forEach(movie => {
      if(!movie.genre_ids) {
        movie.genre_ids = [1];
      } else {
        return;
      };
  
      if(!movie.vote_average) {
        movie.vote_average = 0;
      } else {
        return;
      };
    })
  
    normalRatingYearGenres(data);
    refs.galleryList.insertAdjacentHTML('afterbegin', createCardMovies(data.results));
    return data.results;
  }
  
  function onSearch(e) {
    e.preventDefault();
    api.query = e.currentTarget.elements.query.value;
    resetMarkup();
    api
      .fetchSearch(e)
      .then(data => {
        onCreateMarkup(data);
        incorrectInput(data.results);
        console.log(data.results);
        refs.searchForm.reset()
        appendImgMarkup();
      })
      .catch(onError);
    }
    
    function appendImgMarkup(i) {
        refs.galleryList.insertAdjacentHTML('beforeend', imgTemp(i));
      }
    
      function resetMarkup() {
      refs.galleryList.innerHTML = '';
      api.resetPage();
      refs.searchForm.reset();
    }
    refs.searchForm.addEventListener('submit', onSearch);

    // Ошибки
    function onError() {
        refs.error.classList.remove('is-hidden')
        console.log('Search result not successful. Enter the correct movie name and');
      }
      
      function incorrectInput(e) {
        if (e.length === 0) {
          refs.error.classList.remove('is-hidden')
        } else {
          refs.error.classList.add('is-hidden')
        }

      };
   
// пагинация
function showMovies(movies) {
  refs.galleryList.innerHTML = imgTemp(movies);
}

pagination.on('afterMove', showNewPage);

async function showNewPage(event) {
  api.page = event.page;
  const movies = await api.fetchFilms();

  showMovies(movies.results);
  btnScroll()}
