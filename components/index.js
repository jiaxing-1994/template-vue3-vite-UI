import EgComponent from './egComponent/index.js';

export default {
  install(Vue) {
    Vue.component(EgComponent.name, EgComponent);
  },
  EgComponent,
};
