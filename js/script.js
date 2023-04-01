let cardTemplate = select("#card-template").content;
let modalTemplate = select("#modal-template").content;

let KEY = "bd76f1e5";
let elForm = select("#form");
let elList = select("#list");

elForm.addEventListener("submit",evt => {
    
    evt.preventDefault();
    
    let {search} = evt.target.elements

elList.innerHTML = '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
    getApi(search.value.trim(), KEY)
}) 

async function getApi(search , key){ 
    let data = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${search}`)
    .then((res) => res.json())
    .then((data) => data.Search)
    .catch((error) => console.log(error));
    renderFunc(data, elList)
} 

function renderFunc(array, element){
  element.innerHTML = null;
  array.forEach((film) => {
    let cloneTemplate = cardTemplate.cloneNode(true);

    let li = select("li", cloneTemplate);
    let img = select("img", cloneTemplate);
    let h2 = select("h2", cloneTemplate);
    let btn = select("button", cloneTemplate);

    img.src = film.Poster;
    h2.textContent = film.Title;
    btn.dataset.id = film.id;

    element.append(li);
  });
}