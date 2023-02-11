const fetchComments = async () => {
  const id = localStorage.getItem('id');
  const appKey = localStorage.getItem('apiKey');
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appKey}/comments?item_id=${id}`;
  let rawResponse = await fetch(url);
  rawResponse = await rawResponse.json();
  return rawResponse;
};

const getComments = async () => {
  const commentsList = document.querySelector('.comments_list');
  const ul = document.createElement('ul');
  commentsList.innerHTML = '';
  const rawResponse = await fetchComments();
  document.querySelector('.comment_counter').innerText = rawResponse.length ? rawResponse.length : 0;
  rawResponse.forEach((res) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <p><span>Date:</span>${res.creation_date}</p>
    <p><span>User Name:</span> ${res.username}</p>
    <p><span>Comment:</span>${res.comment}</p>
    <hr class="line">
    `;
    ul.appendChild(li);
  });
  commentsList.innerHTML = '';
  commentsList.append(ul);
  return rawResponse;
};

const postComment = async (name, comment) => {
  const appKey = localStorage.getItem('apiKey');
  const id = localStorage.getItem('id');
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appKey}/comments/`;
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        item_id: id,
        username: name,
        comment,
      },
    ),
  });
  getComments();
  return rawResponse;
};

module.exports = { postComment, getComments, fetchComments };