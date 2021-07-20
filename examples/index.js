import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import antDesign from './thirdComponents/antDesign';
import commonComponents from './common';

function insertUse(app, useList) {
  if (Array.isArray(useList)) {
    useList.forEach((use) => {
      app.use(use);
    });
  } else {
    app.use(useList);
  }
}
function insertComponent(app, components) {
  if (Array.isArray(components)) {
    components.forEach((component) => {
      app.component(component.name, component);
    });
  } else {
    app.component(components.name, components);
  }
}

const app = createApp(App);

insertUse(app, antDesign);
insertUse(app, router);
insertComponent(app, commonComponents);

app.mount('#app');
