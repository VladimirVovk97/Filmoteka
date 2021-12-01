const BASE_URL = 'https://api.themoviedb.org';
const API_URL = '070151ea430b4e74dbca9bca592b262c';
export {TmdbApiService, BASE_URL, API_URL};
export default class TmdbApiService{
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.language = 'en-US';
    this.id = null;
}

// Трендовые фильмы
async fetchFilms() {
  const response = await fetch(`${BASE_URL}/3/trending/all/day?api_key=${API_URL}&page=${this.page}&language=${this.language}`);
  const data = await response.json();
  return data;
}
// Вызов жанров для перевода из ID в String
async fetchGenres() {
  const response = await fetch(`${BASE_URL}/3/genre/movie/list?api_key=${API_URL}&language=${this.language}`);
  const data = await response.json();
  return data.genres;
}
// Поиск по ключевому слову
async fetchSearch() {
  const response = await fetch(`${BASE_URL}/3/search/movie?api_key=${API_URL}&language=${this.language}&query=${this.searchQuery}&page=${this.page}&include_adult=false`);
  const data = await response.json();
  return data;
}
async fetchDescribeMovie() {
  const response = await fetch(`${BASE_URL}/3/movie/${this.id}?api_key=${API_URL}&language=${this.language}`); 
   const data = await response.json();
  //  console.log(data);
  localStorage.setItem('currentId', data.id)
   return data;
   
  }

incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
