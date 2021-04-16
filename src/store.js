import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: {
        todo: [],
        inProgress: [],
        done: [],
  },
  mutations: {
    addItem(state, item) {
      state.items.todo.push(Object.assign(item, { id: state.nextId }));
      state.nextId += 1;

    },

    updateItems(state, { items, id }) {
        state.items[id] = items;
    },
  },
}
});