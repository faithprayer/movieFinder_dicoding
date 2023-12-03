import './movie.js'


class MovieList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: 'open'
        });
    }

    set results(results) {
        this._results = results;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
    
    `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.shadowDOM.innerHTML = '';
        this._results.forEach(result => {
            const resultItemElement = document.createElement('movie-item');
            resultItemElement.result = result;
            this.shadowDOM.appendChild(resultItemElement);
        });
    }
}

customElements.define('movie-list', MovieList);