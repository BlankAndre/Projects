import ApiService from '../service/ApiService';

describe('ApiService', () => {
  it('should return a promise when fetching movies', () => {
    const apiService = new ApiService();
    const movies = [{ title: 'Star Wars' }, { title: 'The Matrix' }];
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(movies),
      })
    );
    return apiService.fetchMovies().then((data) => {
      expect(data).toEqual(movies);
    });
  });

  it('should handle errors when fetching movies', () => {
    const apiService = new ApiService();
    const errorMessage = 'Failed to fetch movies';
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.reject(new Error(errorMessage))
    );
    return apiService.fetchMovies().catch((error) => {
      expect(error.message).toEqual(errorMessage);
    });
  });
});