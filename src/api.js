import store from "./store";

console.log("[store instance]", store);

let uuid = 0;
class ToastMessage {
  constructor(type, title, msg, duration) {
    this.type = type;
    this.title = title;
    this.msg = msg;
    this.duration = duration || 3000; //default 3 seconds
    this.uuid = uuid++;
    this.timer = setTimeout(() => {
      this.remove();
    }, this.duration);
  }
  remove() {
    store.commit("remove", this);
  }
}

store.registerModule("toast", {
  state: () => ({
    messages: [],
  }),
  mutations: {
    push(state, msg) {
      state.messages.unshift(msg);
    },
    remove(state, msg) {
      const index = state.messages.findIndex((t) => t.uuid === msg.uuid);
      state.messages.splice(index, 1);
    },
  },
});

const register = (type, title, msg, duration) =>
  store.commit("push", new ToastMessage(type, title, msg, duration));
const info = (title, message, duration) =>
  register("info", title, message, duration);
const warn = (title, message, duration) =>
  register("warn", title, message, duration);
const error = (title, message, duration) =>
  register("error", title, message, duration);
const success = (title, message, duration) =>
  register("success", title, message, duration);

export default {
  info,
  warn,
  error,
  success,
};
