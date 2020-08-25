<template>
  <div class="params-info">
    <div class="rule">
      <table>
        <tr v-for="(item1, index1) in paramsInfo.rule" :key="index1">
          <td v-for="(item2, index2) in item1" :key="index2">
            {{item2}}
          </td>
        </tr>
      </table>
    </div>
    <div class="set">
      <table>
        <tr v-for="(item, index) in paramsInfo.set" :key="index">
          <td class="key">{{item.key}}</td>
          <td class="value">{{item.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamsInfo",
    props: {
      paramsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .params-info {
    padding: 20px 15px;
    border-bottom: 2px solid rgba(0, 0, 0, .1);
    font-size: 14px;
    color: #666;
  }

  table {
    width: 100%;
  }

  .rule table tr, .set table tr {
    height: 42px;
  }

  .rule table td, .set table td{
    border-bottom: 1px solid rgba(0, 0, 0, .05);
  }

  .set table {
    font-size: 14px;
    color: #666;
  }

  .value {
    color: #eb4868;
  }

  .key {
    width: 95px;
  }
</style>
