class View {
  bindLoadWindow(handler) {
    window.addEventListener('load', handler);
  }

  bindHashChange(handler) {
    window.addEventListener('hashchange', handler);
  }
}

export default new View();
