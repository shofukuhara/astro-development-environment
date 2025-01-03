class fadeEffect {
  constructor() {
    this.logo = document.querySelector('[data-logo]');
  }
  init() {
    window.addEventListener('DOMContentLoaded', () => {
      this._fade();
    });
  }
  _fade() {
    this.logo.setAttribute('data-logo', 'active');
  }
}

const fade = new fadeEffect();
fade.init();
