<template>
  <div id="gird">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "grid"
  }
</script>

<style lang="less" scoped>
#gird{
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(50% - 10px));
  grid-row-gap: 10px;
  grid-column-gap: 10px;
}
</style>
