import countAllLikes from "../Likescount";

global.fetch = jest.fn();

describe('countAllLikes', () => {
    beforeEach(() => {
      fetch.mockReset();
    });
  
    test('returns the number of likes', async () => {
      const likes = [{ id: 1 }, { id: 2 }, { id: 3 }];
      fetch.mockResolvedValue({ json: () => Promise.resolve(likes) });
      const result = await countAllLikes();
      expect(result.length).toBe(3);
    });
  
    test('returns the comments object', async () => {
      const likes = [{ id: 1 }, { id: 2 }, { id: 3 }];
      fetch.mockResolvedValue({ json: () => Promise.resolve(likes) });
      const result = await countAllLikes();
      expect(result).toBe(likes);
    });
  });
  