import '../index.css'

import '../../block/body/body.css'
import '../../block/main/main.css'
import '../../block/header/header.css'
import '../../block/footer/footer.css'
import '../../block/result/result.css'

import Api from './api/api'
import CardList from './cardList/cardList'

export {apiFoto}

const url = 'https://jsonplaceholder.typicode.com';
const apiFoto = new Api (url);

const resultContent = document.querySelector('.result');
const resultAuthor = resultContent.querySelector('.result__author');

apiFoto.getAuthor()
    .then((data) => {
           console.log(data)
           const startList = new CardList (resultAuthor, data);
            startList.renderAuthor();
       })
    .catch(err => { 
           alert(`${err}: ${err.status}`);
    	console.log(`catch err: ${err}: ${err.status}`); 
       });



