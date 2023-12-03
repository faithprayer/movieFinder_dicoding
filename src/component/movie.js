import moment from "moment/moment";

class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: 'open'
        });
    }

    set result(result) {
        this._result = result;
        this.render();
    }

    render() {
        const baseImageURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
        const realeaseDate = moment(`${this._result.release_date}`).format('YYYY');

        this.shadowDOM.innerHTML = `
        <style>
            :host {
                width: 200px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: #DAFFFB;
            }
            .card-container:hover {
                background-color: #000000;
                box-shadow: 0px 30px 18px-8px rgba(0, 0, 0, 0.1);
                transform: scale(1.10, 1.10);
                transition-duration: 1s;
            }

            :host img{
                border-radius: 10px 10px 0 0;
                width: 100%;
                max-width: fit-content;
            }
            :host h4,h2,h5 {
                padding-left: 10px;
                padding-right: 10px;
            }
            </style>
        <div class="card-container">
            <img src='${baseImageURL}${this._result.poster_path}'/>
            <h2> ${this._result.original_title} </h2>
            <h5> Popularity : ${this._result.popularity} </h5> 
            <h5> Release Year : ${realeaseDate} </h5>
            <h4> Rating : ${this._result.vote_average} </h4> 
        </div>
    `;
    }
}

customElements.define('movie-item', MovieItem);