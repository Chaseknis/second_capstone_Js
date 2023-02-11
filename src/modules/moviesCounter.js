const fetchMovies = async () => {
  try {
    let results = await fetch('https://api.tvmaze.com/shows');
    results = await results.json();
    return results;
  } catch (error) {
    return [];
  }
};
module.exports = { fetchMovies };