import './style.css';
import { addLikeEvent, getAllLikes } from './modules/likesCounter.js';
import { createApp } from './modules/movies.js';

createApp();

const container = document.querySelector('.movies_container');

const populateUI = (data, likes) => {
  let like = likes.filter((like) => like.item_id === String(data.id));
  like = like.length ? like[0].likes : 0;

  const maindiv = document.createElement('div');
  maindiv.classList.add('maincard');
  const div = document.createElement('div');
  div.classList.add('movie_wrapper');
  div.innerHTML = `
    <div class="poster_wrapper">
        <img src=${data.image.medium} alt="">
        <div class="details_wrapper">
          <div class="paragraph_container">
            <p>${data.name}</p>
            <span>HD</span>
          </div>
          <div class="likes">

            <div id=${data.id} class="likewrap">
                <span class="counter">${like}</span>
                <img class="heart" src="https://img.icons8.com/color/48/ffffff/hearts.png"/>
            </div>
          </div>
        </div>
    </div>
    <div class="buttons_wrapper" id=${data.id}>
        <button id=${data.id} class="comment">Comments</button>
    </div>
    `;
  maindiv.appendChild(div);
  return maindiv;
};

const popup = async (id, likes) => {
  let results = await fetch(`https://api.tvmaze.com/shows/${id}`);
  localStorage.setItem('id', id);
  let like = likes.filter((like) => like.item_id === String(id));
  like = like.length ? like[0].likes : 0;
  results = await results.json();
  document.querySelector('.popup').style.display = 'flex';
  document.querySelector('.displayimg').setAttribute('src', results.image.medium);
  document.querySelector('.like_counter').innerText = `${like}`;
  document.querySelector('.image-arrow').addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'none';
  });
  document.querySelector('.moviename').innerText = results.name;
};

const comment = async () => {
  const comments = document.querySelectorAll('.buttons_wrapper');
  const likes = await getAllLikes();
  comments.forEach((element) => {
    element.addEventListener('click', () => {
      const id = element.getAttribute('id');
      popup(id, likes);
    });
  });
};

const insertToDom = async () => {
  let results = await fetch('https://api.tvmaze.com/shows');
  results = await results.json();
  const likes = await getAllLikes();
  results.forEach((element) => {
    container.appendChild(populateUI(element, likes));
  });
  comment();
  addLikeEvent();
};
insertToDom();
