export default class Api {
    constructor (url) {
        this._url = url;
    }

    getAuthor() {
        return fetch(`${this._url}/users`, {
            method: 'GET'
        })
        .then(res => {

			if(res.ok) {
                return res.json();
            } else {
                alert(`${err}: ${err.status}`);
            }
            return Promise.reject(res);
        })
    }

    getAlbums(id) {
        return fetch(`${this._url}/albums?userid=${id}`, {
            method: 'GET'
        })
        .then(res => {

			if(res.ok) {
                return res.json();
            } else {
                alert(`${err}: ${err.status}`);
            }
            return Promise.reject(res);
        })
    }

    getImage(albumId) {
        return fetch(`${this._url}/photos?albumid=${albumId}`, {
            method: 'GET'
        })
        .then(res => {

			if(res.ok) {
                return res.json();
            } else {
                alert(`${err}: ${err.status}`);
            }
            return Promise.reject(res);
        })
    }
}