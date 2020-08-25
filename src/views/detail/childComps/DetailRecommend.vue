<template>
  <div class="detail-recommend">
    <div class="detail-recommend-title">热门推荐</div>
    <goods-list :goods="recommend"/>
  </div>
</template>

<script>
  import GoodsList from 'content/goods/GoodsList'
  export default {
    name: "DetailRecommend",
    components: {
      GoodsList
    },
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scroped>
  .detail-recommend{
    padding: 8px;
  }

  .detail-recommend-title {
    margin-left: 8px;
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    color: #333;
  }
</style>
