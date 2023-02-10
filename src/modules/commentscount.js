import { fetchcomments } from './comments.js';

const commentcount = async () => {
  const comments = await fetchcomments();
  return comments.length;
};

module.exports = {
  commentcount,
};