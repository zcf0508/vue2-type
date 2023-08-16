import Vue, { ComponentOptions } from "vue";
import type { MyStore } from "./store/helper";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    store?: MyStore;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $store: MyStore;
  }
}
