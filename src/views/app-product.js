import { html } from 'lit';
import { Base } from '../Base';
import '../components/add-cart-button';

export class AppProduct extends Base {
  constructor() {
    super();

    this.product = {};

    this.loaded = false;
    this.networdState = true;
  }

  static get properties() {
    return {
      product: { type: Object },
      loaded: { type: Boolean, state: true }
    }
  }
  
  changeNetworkState(networdState) {
    this.networdState = networdState;
  }
  
  firstUpdated() {
    const image = this.querySelector('img');
    image.addEventListener('load', () => {
      this.loaded = true;
    });
  }

  render() {
    return html`
      <section class="product">
        <header>
          <figure>
            <div class="placeholder ${this.loaded ? 'fade' : ''}" style="background-image: url(http://localhost:9000/image/24/${this.product.image})"></div>
            <img
              loading="lazy"
              src="http://localhost:9000/image/500/${this.product.image}"
              alt="${this.product.description}"
              data-src="http://localhost:9000/image/500/${this.product.image}"
              width="1280"
              height="720">
          </figure>
        </header>
        <main>
          <h1>${this.product.title}</h1>
          <p>${this.product.description}</p>
          <add-cart-button .productId=${this.product.id}></button>
        </main>
      </section>
    `;
  }
}
customElements.define('app-product', AppProduct);