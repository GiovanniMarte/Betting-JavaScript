class View {
  bindLoadWindow(handler) {
    window.addEventListener('load', handler);
  }
}

export default new View();
