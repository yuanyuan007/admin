<template>
  <div class="warrp">
    <div class="search_box">
      <div class="search">
        <slot name="search"></slot>
      </div>
      <div class="created">
        <slot name="created"></slot>
      </div>
    </div>
    <div class="warrp_content">
      <slot name="table"></slot>
      <div class="pagination">
        <slot name="pagination"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
</style>