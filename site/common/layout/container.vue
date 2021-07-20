<template>
  <div class="container">
    <div class="markdown">
      <slot name="desc"></slot>
    </div>
    <slot name="code"></slot>
    <div class="markdown">
      <slot name="API"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'container',
  props: {
    title: String,
    profile: String
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  padding: 10px 20px;
  &-title {
    position: relative;
    padding: 8px 0;
  }
  p {
    position: relative;
    padding: 8px 0;
  }
  &-profile {

  }
}
</style>
