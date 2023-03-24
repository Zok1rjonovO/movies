let elList = selectEl("#list")

function renderFunc(array , element) {

    array.forEach(film => {
        let newLi  = creatEl("li");
        let newimg = creatEl("img");
        let newh2 = creatEl("h2");
        let newP = creatEl("p");
        let newGenrelist = creatEl("ul");
        let newBtn = creatEl("button")
        
        setAtt(newimg, "src" , film.Poster);
        setAtt(newimg, "style" , "width:400;");
        setAtt(newBtn, "type" , "button");
        
        newh2.textContent = film.Title
        newP.textContent = "genres:"
        newBtn.textContent = "Show more"

        film.genres.forEach((genre) => {
            let newGenreli = creatEl("li");
            newGenreli.textContent = genre;
            newGenrelist.append(newGenreli);
        });

        newLi.append(newimg , newh2 , newP , newGenrelist , newBtn);

        element.append(newLi);
    });
}
renderFunc(films , elList)