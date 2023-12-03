class searchContainer extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: 'open'
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector('#searchInput').value;
    }

    render() {
        this.shadowDOM.innerHTML = 
        `
        <style>
            /* Style Elemen Pencarian */
                .search-container {
                    text-align: center;
                    margin:20px;
                }

                .searchInput{
                    padding: 10px;
                    width: 100px;
                    box-sizing: border-box;
                    border-radius: 50px;
                    border: none;
                    background-color: #DAFFFB;
                    transition: width 0.4s ease-in-out;
                }
                .searchInput:focus{
                    width: 300px;
                }
                .searchBtn{
                    background-color: #000000;
                    color: #EEEEEE;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                }
                .searchBtn:hover{
                    background-color: #DAFFFB;
                    color:black;
                }
            </style>
            <div class="search-container">
                <input class="searchInput" type="text" placeholder="search...." id="searchInput">
                <button class="searchBtn" id='searchBtn'> Search </button>
                </div>
        `;

        this.shadowDOM.querySelector('#searchBtn')
            .addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-container', searchContainer);
