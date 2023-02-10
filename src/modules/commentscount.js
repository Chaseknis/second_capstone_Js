import { fetchComments } from './comments.js';

const commentCounter = async () => {
  const comments = await fetchComments();
  return comments.length;
};

module.exports = { commentCounter };