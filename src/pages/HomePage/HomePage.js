export default function HomePage() {
  return <h2>hello</h2>;
}

// const API_KEY = '61153224aaaa08b03f5d3b14add082d2';
// const BASE_URL = 'https://api.themoviedb.org/3';

// function HomePage(n = 1) {
//   return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${n}`)
//     .then(r => {
//       if (r.ok) {
//         return r.json()
//       }

//     })
//     .then(({ results, total_pages }) => {
//       return { results, totalPages: total_pages };
//     })
//     .catch(error => console.log(error));
// }

// const api = {
//   HomePage,
// };

// export default api;
