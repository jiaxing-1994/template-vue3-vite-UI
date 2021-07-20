<template>
  <a-row class="header">
    <a-col class="header-logo" :span="4">
      <img src="#"> VCOLCO
    </a-col>
    <a-col class="header-title" :span="20">

    </a-col>
  </a-row>
  <a-row>
    <a-col :span="4">
      <a-menu mode="inline">
        <div v-for="item in menu">
          <a-menu-item
            v-if="!item.groups"
            :key="item.title">
            <router-link :to="item.route" replace>
              {{item.title}}
            </router-link>
          </a-menu-item>
          <a-sub-menu
            v-else
          >
            <template #title>
              {{item.title}}
            </template>
            <a-menu-item
              v-for="component in item.groups"
              :key="component.title">
              <router-link :to="component.route" replace>
                {{component.title}}
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </div>
      </a-menu>
    </a-col>
    <a-col :span="20">
      <router-view></router-view>
    </a-col>
  </a-row>
</template>

<script>
import menu from './menu.json';
export default {
  setup() {
    console.log(menu);
    return {
      menu,
    }
  }
}
function initMenu() {
  const routerPaths = import.meta.globEager('./components/**/*.vue');
  const getDirName = (path, num = 2) => {
    const frag = path.split('/');
    return frag[frag.length - num];
  }
  const menu = [];
  for (const i in routerPaths) {
    if (i.split('/').length === 4) {
      const name = getDirName(i);
      let isFind = false;
      for (let j = 0; j < menu.length; j += 1) {
        if (menu[j].title === name) {
          isFind = true;
          break;
        }
      }
      if (!isFind) {
        menu.push({
          title: name,
          route: `/${name}`,
        });
      }
    }
  }
  return {
    menu,
  }
}
</script>

<style lang="less" scoped>
  .header {
    position: relative;
    border-bottom: 1px solid #dfdfdf;
    &-logo {
      position: relative;
      text-align: center;
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      img {
        position: relative;
        display: inline-block;
        height: 40px;
        vertical-align: middle;
      }
    }
    &-title {
      position: relative;
      line-height: 60px;
      height: 60px;
      font-size: 24px;
      font-weight: 900;
    }
  }
</style>
