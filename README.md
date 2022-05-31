<h1 align="center">Welcome to v-toastser 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D12-blue.svg" />
  <a href="https://github.com/notschlag/v-toastser#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/notschlag/v-toastser/blob/main/LICENSE.txt" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Vue.js toast notification plugin free to use for Vue3

### 🏠 [Homepage](https://github.com/notschlag/v-toastser#readme)

### ✨ [Demo](https://github.com/notschlag/v-toastser#readme)

## Prerequisites

- node >=12

## Install

```sh
npm install v-toastser
```

## Import

```js
//main.js
import { createApp } from "vue";
import App from "./App.vue";

import store from "v-toastser/src/store";
import ToastNotification from "v-toastser";

createApp(App).use(store).use(ToastNotification).mount("#app");
```

```js
//component.vue
import toast from "v-toastser/src/api.js";
```

## Usage

```js
toast.info("Title", "This is a toast!", 4000);
toast.warn("Title", "This is a toast!", 4000);
toast.error("Title", "This is a toast!", 4000);
toast.success("Title", "This is a toast!", 4000);
```

## Execute example

Clone the example project and run:

```js
cd example
npm install
npm run serve
```

## Author

👤 **notschlag**

- Github: [@notschlag](https://github.com/notschlag)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [notschlag](https://github.com/notschlag).<br />
This project is [MIT](https://github.com/notschlag/v-toastser/blob/main/LICENSE.txtt) licensed.

---
