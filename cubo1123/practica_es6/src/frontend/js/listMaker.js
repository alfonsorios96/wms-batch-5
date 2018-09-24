const makeList = () => {
    fetch("http://localhost:8080/heroes/", {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).then(res => res.json())
        .then(json => {
            const heroes = json.response;
            const list = document.createElement("ul");
            for(const hero of heroes) {
                const heroLi = document.createElement("li");
                const heroImg = document.createElement("img");
                heroImg.src = hero.image;
                heroLi.appendChild(heroImg);
                let heroName = document.createElement("span");
                heroName.textContent = hero.name;
                heroLi.appendChild(heroName);
                list.appendChild(heroLi);
            }
            document.body.appendChild(list);
        })

};

window.onload = () => {
    makeList()
};

