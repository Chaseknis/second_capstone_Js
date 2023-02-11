import countAllLikes from '../Likescount.js';

global.fetch = jest.fn();

describe('countAllLikes', () => {
  beforeEach(() => {
    fetch.mockReset();
  });

  test('returns the number of likes', async () => {
    const likes = [{ id: 1 }, { id: 2 }, { id: 3 }];
    fetch.mockResolvedValue({ json: () => Promise.resolve(likes) });
    const result = await countAllLikes();
    expect(result).toBe(3);
  });

  test('returns the likes object', async () => {
    const likes = [{ id: 1 }, { id: 2 }, { id: 3 }];
    fetch.mockResolvedValue({ json: () => Promise.resolve(likes) });
    const result = await countAllLikes();
    expect(result).toBe(3);
  });

  test('returns 0 if there are 0 likes', async () => {
    const likes = [];
    fetch.mockResolvedValue({ json: () => Promise.resolve(likes) });
    const result = await countAllLikes();
    expect(result).toBe(0);
  });
});
