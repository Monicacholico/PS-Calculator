let url = 'http://localhost:5000/db.json';
fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('Checkout this JSON! ', out.pointeShoes[0]);
})
.catch(err => { throw err });

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