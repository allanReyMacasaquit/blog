function createStore() {
  return {
    validate(node, value) {
      console.log(node, value);
    }
  };
}

export const formHandlerStore = createStore();
