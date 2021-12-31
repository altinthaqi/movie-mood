export const api = {
  key: "api_key=2ce382af5d9ffe488825ed88f3dcd568",
  base_url: "https://api.themoviedb.org/3",
  by_popularity: "/discover/movie?sort_by=popularity.desc",
  //Kur don me e bo search ni film
  search_movie: "/discover/movie?",
  //Search by query https://api.themoviedb.org/3/search/movie?api_key=###&query=###
  search_title: "/search/movie?",
  query: "&query=",
  //Change page, &page=n
  page: "&page=",
  specific_movie: "/movie",
  //I shtohet: data.poster_path prej data obj
  original_img_url: "https://image.tmdb.org/t/p/original",
  highest_rated: "sort_by=vote_count.desc",
  lowest_rated: "sort_by=vote_average.asc",
};
