class SidebarService {
  selectedPath;

  constructor() {
    this.selectedPath = {};
  }

  selectPath(url) {
    this.selectedPath = { path: url };
  }
}

export default new SidebarService();
