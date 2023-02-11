import { getAllLikes } from './likesCounter.js';

const countAllLikes = async () => {
  const likes = await getAllLikes();
  return likes.length;
};

export default countAllLikes;