const fetchcomments = async () => {
  const id = localStorage.getItem('id');
  const appkey = localStorage.getItem('apikey');
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appkey}/comments?item_id=${id}`;
  let rawResponse = await fetch(url);
  rawResponse = await rawResponse.json();
  return rawResponse;
};

const getComments = async () => {
  const commentslist = document.querySelector('.commentslist');
  const ul = document.createElement('ul');
  const rawResponse = await fetchcomments();
  document.querySelector('.commentcounter').innerText = rawResponse.length ? rawResponse.length : 0;
  rawResponse.forEach((res) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <p>${res.username}</p>
    <p>${res.comment}</p>
    <p>${res.creation_date}</p>
    `;
    ul.appendChild(li);
  });
  commentslist.innerHTML = '';
  commentslist.append(ul);
  return rawResponse;
};

const postComment = async (name, comment) => {
  const appkey = localStorage.getItem('apikey');
  const id = localStorage.getItem('id');
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appkey}/comments/`;
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

module.exports = {
  postComment,
  getComments,
  fetchcomments,
};