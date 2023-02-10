import { commentCounter } from '../commentsCount.js';

const fetchComments = jest.fn();

describe('commentCounter', () => {
  beforeEach(() => {
    fetchComments.mockReset();
  });

  test('returns the number of comments', async () => {
    fetchComments.mockResolvedValue([{ id: 1 }, { id: 2 }, { id: 3 }]);
    const result = await commentCounter();
    expect(result).toBe(3);
  });

  test('returns 0 if fetchComments fails', async () => {
    fetchComments.mockRejectedValue(new Error('Something went wrong'));
    const result = await commentCounter();
    expect(result).toBe(0);
  });
});

