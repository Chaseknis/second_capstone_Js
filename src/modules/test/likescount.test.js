import countAllLikes from "../LikesCount";
import { spyOn } from 'jest-mock';

const fetchSpy = spyOn(global, 'fetch');

describe('countAllLikes', () => {
  beforeEach(() => {
    fetchSpy.mockReset();
  });

  test('returns the number of likes', async () => {
    const likes = [{ id: 1 }, { id: 2 }, { id: 3 }];
    fetchSpy.mockResolvedValue({ json: () => Promise.resolve(likes) });
    const result = await countAllLikes();
    expect(result.length).toBe(3);
  });

  test('returns the likes object', async () => {
    const likes = [{ id: 1 }, { id: 2 }, { id: 3 }];
    fetchSpy.mockResolvedValue({ json: () => Promise.resolve(likes) });
    const result = await countAllLikes();
    expect(result).toEqual(likes);
  });
});

  