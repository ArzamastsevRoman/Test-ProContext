import Card from '../card/card'
import {apiFoto} from '../index'

export default class CardList {
    constructor (container, array) {
        this.container = container;
        this.array = array;

        this.renderAuthor = this.renderAuthor.bind(this);
    }

    renderAuthor () {
        for (let i = 0; i < this.array.length; i++) {
            const resultCard = new Card(this.array[i].name, this.array[i].id);
        }
    }
}