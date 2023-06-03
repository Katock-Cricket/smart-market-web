<template>
  <el-table :data="this.list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="商品名" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.name | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="数量" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.amount }}
      </template>
    </el-table-column>
    <el-table-column label="价格" width="100" align="center">
      <template slot-scope="{row}">
        ¥{{ row.price }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

export default {

  props: {
    list: {
      type: Array,
      required: true,
    }
  },
  filters: {
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  created() {
  },
}
</script>
