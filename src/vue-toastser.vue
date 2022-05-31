<template>
  <div>
    <ToastNotification />
  </div>
</template>

<script>
import ToastNotification from "./toast-notification.vue";

import { defineComponent } from "vue";

export default /*#__PURE__*/ defineComponent({
  name: "App",
  components: {
    ToastNotification,
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

* {
  font-family: "Poppins", Arial;
  font-size: 10px;
}
</style>
