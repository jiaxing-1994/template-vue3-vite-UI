import { createRouter, createWebHistory } from 'vue-router';

const routerPaths = import.meta.globEager('./routers/**/*.vue');

function generateRouter(paths) {
  const routers = [];
  const getDirName = (path) => {
    const frag = path.split('/');
    return frag[frag.length - 2];
  }
  for (const path in paths) {
    console.log(paths);
    routers.push({
      path: '/' + getDirName(path),
      component: () => paths[path],
    })
  }
  return routers;
}
const routers = generateRouter(routerPaths);
console.log(routers);
const routes = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default routes;
