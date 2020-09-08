
const filterPshoe = pointeShoe => {
    const url = 'http://localhost:3000/db.json';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.parse(pointeShoe),
    };
    return fetch(url, options)
        .then(response => response.parse.JSON())
        .then(response => console.log(response));
};
filterPshoe();
// console.log(pointeShoes[01]);

const formwrap = document.querySelector('form');
const options = Array.from(document.getElementsByTagName('option'));
// console.log(danceLevel);

function filtering() {
   const alpha = options.filter( option => option.value === 'narrow');
                        // .filter( option => option.value === 'narrow');
//    return alpha;
   console.log(alpha);
} 

filtering();