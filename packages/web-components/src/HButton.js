const template = document.createElement('template');
template.innerHTML = `
  <style>
    button {
      font-size: 16px;
      color: #182633;
      background: #ffffff;
      padding: 4px 16px;
      border: 2px solid #2a4158;
      border-radius: 4px;
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
    }
    button:hover {
      cursor: pointer;
    }
    button:focus {
      outline: none;
      box-shadow: 0 0 3px #958a56;
    }
  </style>
  <button type="button">
    <slot />
  </button>
`;

class HButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (!this.hasAttribute('type'))
      this.setAttribute('type', 'button');

    if (!this.hasAttribute('tabindex'))
      this.setAttribute('tabindex', 0);
  }
}

window.customElements.define('h-button', HButton);
