import { Photoshop, create } from "@ckpack/vue-color";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(create({ components: [Photoshop] }));
});