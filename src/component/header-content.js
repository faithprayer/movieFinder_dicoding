class HeaderContent extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: 'open'
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
          <h1> Popular Movie Search </h1>
    `;
    }
}

customElements.define('header-content', HeaderContent);