import commentCounter from '../commentscount.js';

global.fetch = jest.fn();
describe('commentCounter', () => {
  beforeEach(() => {
    fetch.mockReset();
  });

  test('returns the number of comments', async () => {
    const comment = [{ id: 1 }, { id: 2 }, { id: 3 }];
    fetch.mockResolvedValue({ json: () => Promise.resolve(comment) });
    const result = await commentCounter();
    expect(result.length).toBe(3);
  });

  test('returns the comments object', async () => {
    const comment = [{ id: 1 }, { id: 2 }, { id: 3 }];
    fetch.mockResolvedValue({ json: () => Promise.resolve(comment) });
    const result = await commentCounter();
    expect(result).toBe(comment);
  });
  test('returns an empty array if there are 0 comments', async () => {
    const comment = [];
    fetch.mockResolvedValue({ json: () => Promise.resolve(comment) });
    const result = await commentCounter();
    expect(result).toEqual([]);
  });
});
