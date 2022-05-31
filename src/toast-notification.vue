<template>
  <div class="toast-wrapper">
    <transition-group name="toast">
      <div
        class="toast"
        :class="toast.type"
        v-for="toast in toasts"
        :key="toast.uuid"
      >
        <transition-group name="toastmsg">
          <transition name="icon-fade" appear>
            <i class="fa-solid fa-check"></i>
          </transition>
          <transition name="title-fade" appear>
            <div class="title">{{ toast.title }}</div>
          </transition>
          <transition name="msg-fade" appear>
            <div class="msg">{{ toast.msg }}</div>
          </transition>
        </transition-group>
      </div>
    </transition-group>
  </div>
</template>

<script>
import store from "./store";

export default {
  name: "ToastNotification",
  computed: {
    toasts() {
      console.log(store);
      return this.$store.state.toast.messages;
    },
  },
};
</script>

<style scoped>
.toast-wrapper {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1;
}

.toast {
  border-radius: 5px;
  background-color: #1a1a27;
  padding: 13px 16px;
  display: flex;
  column-gap: 8px;
  align-items: center;
  color: white;
  width: auto;
  margin-top: 8px;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.3);
}

.toast .title {
  font-weight: bold;
  margin-left: 3px;
  word-break: normal;
  width: auto;
}

.toast .msg {
  min-width: 126px;
  max-width: 250px;
  width: auto;
  word-break: break-word;
  margin-left: 2px;
}

h5 {
  margin: 0;
  flex: 1 1 auto;
}

.info {
  border-right: 5px solid #70ff70;
}

.warn {
  border-right: 5px solid #ffdf76;
}

.error {
  border-right: 5px solid #ff7676;
}

.success {
  border-right: 5px solid #76f4ff;
}

.toast-move,
.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s ease;
}

.toast-enter-from {
  transform: translateY(-15px);
}

.toast-leave-to {
  opacity: 0;
}

.toast-leave-active {
  position: absolute;
}

.title-fade-enter-active {
  animation: indent 1s;
}

.msg-fade-enter-active {
  animation: indent2 1.3s;
}

.icon-fade-enter-active {
  animation: bounce-in 0.9s;
}

.toast i {
  color: #a9a9a9;
  font-size: 13px;
}

@keyframes indent {
  0% {
    opacity: 0;
    transform: translateX(17px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes indent2 {
  0% {
    opacity: 0;
    transform: translateX(15px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    font-size: 1px;
  }
  50% {
    font-size: 13.5px;
  }
  100% {
    opacity: 1;
    font-size: 13px;
  }
}
</style>
