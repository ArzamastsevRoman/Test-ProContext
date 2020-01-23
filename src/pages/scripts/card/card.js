import {apiFoto} from '../index'

export default class Card {
    constructor (author, id) {
        this.author = author;
        this.id = id;

        this.createAuthor = this.createAuthor.bind(this);
        this.createAuthor();
    }

    createAuthor () {
        const resultAuthor = document.createElement('h2');
		resultAuthor.classList.add('result__author-title');
        resultAuthor.textContent = this.author;

        resultAuthor.onclick = this.createAlbum;
        resultAuthor.addEventListener('click', function () {
            resultAuthor.setAttribute('style', 'color: red');
        })
        
        const result = document.querySelector('.result__author');
        result.appendChild(resultAuthor);
    }

    createAlbum() {
        apiFoto.getAlbums(this.id)
            .then((data) => {
                console.log(data)
                for (let i=0; i<data.length; i++){
                    const resultAlbum = document.createElement('h2');
                    resultAlbum.classList.add('result__album-title');
                    resultAlbum.textContent = data[i].title;

                    resultAlbum.addEventListener('click', function() {
                        resultAlbum.setAttribute('style', 'color: red');
                        apiFoto.getImage(data[i].id)
                        .then((data) => {
                            console.log(data)
                            for (let i=0; i<30; i++){
                                const resultCard = document.createElement('img');
                                resultCard.classList.add('result__foto-image');
    
                                resultCard.setAttribute('src', `${data[i].url}`);
                                resultCard.setAttribute('alt', 'Подгруженное изображение');
                                const resultImage = document.querySelector('.result__foto');
                                resultImage.appendChild(resultCard);
                            }
                            
                        })
                        .catch(err => { 
                            alert(`${err}: ${err.status}`);
                         console.log(`catch err: ${err}: ${err.status}`); 
                        });
                    });
                    
                    const result = document.querySelector('.result__album');
                    result.appendChild(resultAlbum);
            
                    this.resultAlbum = resultAlbum;
                }
            })
            .catch(err => { 
                alert(`${err}: ${err.status}`);
             console.log(`catch err: ${err}: ${err.status}`); 
            });
    }
}