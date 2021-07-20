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
        <a-menu-item
          v-for="item in menu"
          :key="item.title"
          :index="item.title">
          <router-link :to="item.route" replace>
            {{item.title}}
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col :span="20">
      <router-view></router-view>
    </a-col>
  </a-row>
</template>

<script>
export default {
  setup() {
    const { menu } = initMenu();
    return {
      menu,
    }
  }
}
function initMenu() {
  const routerPaths = import.meta.globEager('../components/**/*.vue');
  const getDirName = (path) => {
    const frag = path.split('/');
    return frag[frag.length - 2];
  }
  const menu = [];
  for (const i in routerPaths) {
    if (i.split('/').length === 4) {
      const name = getDirName(i);
      menu.push({
        title: name,
        route: `/${name}`,
      })
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
