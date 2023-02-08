import './style.css';

const container = document.querySelector('.movies_container');

const populateUI = (data) => {
  const maindiv = document.createElement('div');
  maindiv.classList.add('maincard');
  const div = document.createElement('div');
  div.classList.add('movie_wrapper');
  div.innerHTML = `
    <div class="poster_wrapper">
        <img src=${data.image.medium} alt="">
        <div class="details_wrapper">
        <p>${data.name}</p>
        <div id=${data.id} class="likewrap"><img class="heart" src="https://img.icons8.com/color/48/ffffff/hearts.png"/></div>
        </div>
    </div>
    <div class="buttons_Wrapper" id=${data.id}>
        <button id=${data.id} class="comment">Comments</button>
    </div>
    `;
  maindiv.appendChild(div);
  return maindiv;
};
const popup = async (element) => {
  const id = element.getAttribute('id');
  let results = await fetch(`https://api.tvmaze.com/shows/${id}`);
  results = await results.json();
  document.querySelector('.popup').style.display = 'flex';
  document.querySelector('.displayimg').setAttribute('src', results.image.medium);
  document.querySelector('.image-arrow').addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'none';
  });
  document.querySelector('.moviename').innerText = results.name;
};
const comment = () => {
  const comments = document.querySelectorAll('.buttons_Wrapper');
  comments.forEach((element) => {
    element.addEventListener('click', () => {
      popup(element);
    });
  });
};

const insertToDom = async () => {
  let results = await fetch('https://api.tvmaze.com/shows');
  results = await results.json();
  results.forEach((element) => {
    container.appendChild(populateUI(element));
  });
  comment();
};
insertToDom();
