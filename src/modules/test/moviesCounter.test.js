import { fetchMovies } from '../moviesCounter.js';

global.fetch = jest.fn();

describe('fetchMovies', () => {
  beforeEach(() => {
    fetch.mockReset();
  });

  test('returns the movie data', async () => {
    const movieData = [{ id: 1, name: 'Movie 1' }, { id: 2, name: 'Movie 2' }];
    fetch.mockResolvedValue({ json: () => Promise.resolve(movieData) });
    const result = await fetchMovies();
    expect(result).toEqual(movieData);
  });

  test('returns an empty array if fetch fails', async () => {
    fetch.mockRejectedValue(new Error('Something went wrong'));
    const result = await fetchMovies();
    expect(result).toEqual([]);
  });

  test('returns an empty array if there are 0 movies', async () => {
    const movieData = [];
    fetch.mockResolvedValue({ json: () => Promise.resolve(movieData) });
    const result = await fetchMovies();
    expect(result).toEqual([]);
  });
});
