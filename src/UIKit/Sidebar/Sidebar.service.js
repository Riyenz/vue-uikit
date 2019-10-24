class SidebarService {
  selectedPath;

  constructor() {
    this.selectedPath = '';
  }

  selectPath(url) {
    this.selectedPath = url;
  }
}

export default new SidebarService();
