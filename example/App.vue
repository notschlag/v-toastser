<template>
  <div>
    <input type="text" v-model="toasttitle" placeholder="Title MSG" />
    <input type="text" v-model="toastinput" placeholder="Toast MSG" />
    <button @click="sendtoast">TOAST</button>
    <ToastNotification />
  </div>
</template>

<script>
import toast from "v-toastser/src/api.js"; //important

export default {
  name: "App",
  components: {},
  data() {
    return {
      toasttitle: "NoClip",
      toastinput: "Hallo Welt :)",
    };
  },
  methods: {
    sendtoast() {
      if (this.toastinput == "") return;
      toast.info(this.toasttitle, this.toastinput, 4000);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

* {
  font-family: "Poppins", Arial;
  font-size: 10px;
}
</style>
