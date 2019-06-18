class ModalService {
  defaultLogo;

  constructor() {
    this.defaultLogo = '';
  }

  setDefaultLogo(url) {
    this.defaultLogo = url;
  }

  getDefaultLogo() {
    return this.defaultLogo;
  }
}

export default new ModalService();
