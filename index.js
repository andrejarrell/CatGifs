import { getCats } from './cats.js';

document.addEventListener('DOMContentLoaded', yall({
    observeChanges: true
}));

window.app = new Vue({
    el: '#cats',
    data: {
        loaded: 12,
        cats: getCats(0)
    },
    methods: {
        load() {
            this.cats = getCats();
            this.loaded +=12;
        }
    }
});
