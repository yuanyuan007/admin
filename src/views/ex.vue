<template>
  <div class="content">
    <Warrp-temp>
      <template slot="search">

      </template>
      <template slot="created">
      </template>
      <template slot="table">

      </template>
      <template slot="pagination">

      </template>
    </Warrp-temp>

  </div>
</template>
<script>
import { Table, TableColumn, Dialog, Tree } from 'element-ui';
export default {
  components: {
    elTable: Table,
    elTableColumn: TableColumn,
    elDialog: Dialog,
    elTree: Tree
  },
  data() {
    return {
      paginationData: {
        pageNo: 1,
        pageSize: 10
      },
      total: 100
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
</style>