import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routers from './router';
import antDesign from './thirdComponents/antDesign';
import commonComponents from './common';
import './common/theme/index.js';
import 'highlight.js/styles/a11y-light.css';

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

const routes = createRouter({
  history: createWebHistory(),
  routes: routers,
});

const app = createApp(App);
insertUse(app, antDesign);
insertUse(app, routes);
insertComponent(app, commonComponents);

app.mount('#app');
