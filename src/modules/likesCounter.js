const getAllLikes = async () => {
  try{
    const appkey = localStorage.getItem('apikey');
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appkey}/likes/`;
    let likes = await fetch(url);
    return await likes.json();
  }catch(error){
    return []
  }
};

const addLike = async (id) => {
  const appkey = localStorage.getItem('apikey');
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appkey}/likes/`;
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  return rawResponse;
};

const addLikeEvent = () => {
  const likebtn = document.querySelectorAll('.likes_wrap');
  likebtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('id');
      addLike(id);
      const num = btn.querySelector('.counter');
      const newNum = parseInt(num.innerText, 10) + 1;
      btn.querySelector('.counter').innerText = newNum;
    });
  });
};

module.exports = { addLikeEvent, getAllLikes };