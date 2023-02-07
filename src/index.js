import './style.css';

const movies = [1,1,1,1,1,1]
const coontainer = document.querySelector(".movies_container")

const populate_ui = ()=>{
    const maindiv = document.createElement("div")
    const div = document.createElement("div")
    div.classList.add("movie_wrapper")
    div.innerHTML = `
    <div class="poster_wrapper">
        <img src="https://static.tvmaze.com/uploads/images/medium_portrait/439/1098374.jpg" alt="">
        <div class="details_wrapper">
        <p>Movie name</p>
        <div>Likes</div>
        </div>
    </div>
    <div class="buttons_Wrapper">
        <button>Comments</button>
    </div>
    `
   movies.forEach((data)=>{
    maindiv.appendChild(div)
   }) 

   coontainer.append(maindiv)
}
populate_ui()

