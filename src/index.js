
function getProfiles() {
    return fetch('http://localhost:3000/pointeShoes')
        .then(response => response.json())
}


function generateCards() {
    let html = "";
    getProfiles()
        .then((pointeShoes) => {
            pointeShoes.forEach((pointeShoe) => {
                console.log(pointeShoe);
                html +=
                    `<div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">${pointeShoe.name}</h5>
                        <p class="card-text">Genre: ${pointeShoe.bio}</p>
                    </div>
                    </div>`
            });
            $('#profileCards').html(html);
        })
}

function generateRandomCard() {
    let profileHtml = "";
    getProfiles()
        .then((pointeShoes) => {
           var randomNumber = Math.floor((Math.random() * pointeShoes.length) + 1);
            console.log(randomNumber);
            pointeShoes.forEach((pointeShoe) => {
                if (randomNumber === pointeShoe.id){
                   profileHtml +=
                       `<div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">${pointeShoe.name}</h5>
                        <p class="card-text">Genre: ${pointeShoe.bio}</p>
                    </div>
                    </div>`
               }
           });
           $('#featuredProfile').html(profileHtml)
        })
    };


// generateCards();

generateRandomCard();