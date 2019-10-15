
function getProfiles() {
    return fetch('http://localhost:3000/women')
        .then(response => response.json())
}


function generateCards() {
    let html = "";
    getProfiles()
        .then((women) => {
            women.forEach((woman) => {
                console.log(woman);
                html +=
                    `<div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">${woman.name}</h5>
                        <p class="card-text">Genre: ${woman.bio}</p>
                    </div>
                    </div>`
            });
            $('#profileCards').html(html);
        })
}

function generateRandomCard() {
    let profileHtml = "";
    getProfiles()
        .then((women) => {
           var randomNumber = Math.floor((Math.random() * women.length) + 1);
            console.log(randomNumber);
            women.forEach((woman) => {
                if (randomNumber === woman.id){
                   profileHtml +=
                       `<div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">${woman.name}</h5>
                        <p class="card-text">Genre: ${woman.bio}</p>
                    </div>
                    </div>`
               }
           });
           $('#featuredProfile').html(profileHtml)
        })
    };


// generateCards();

generateRandomCard();