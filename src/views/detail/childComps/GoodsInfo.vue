<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="title">{{goods.title}}</div>
    <div>
      <span class="price">{{goods.price}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discountDesc}}</span>
    </div>
    <div class="sell">
      <span>{{goods.sell}}</span>
      <span>{{goods.collect}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="services">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    font-size: 15px;
    margin-top: 15px;
    padding: 0 8px;
    border-bottom: 5px solid rgba(100, 100, 100, .1);
  }

  .title {
    margin-bottom: 10px;
  }

  .price {
    font-size: 24px;
    color: var(--color-high-text);
    margin-right: 8px;
  }

  .oldPrice {
    font-size: 12px;
    color: #999999;
    text-decoration: line-through;
  }

  .discount {
    background: var(--color-high-text);
    color: #fff;
    margin-left: 5px;
    border-radius: 8px;
    font-size: 12px;
    padding: 3px 3px;

    position: relative;
    top: -8px;
  }

  .sell {
    margin-top: 20px;
    padding: 5px 0;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    color: #999;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
  }

  .services img {
    width: 13px;
    height: 13px;
  }
  .services {
    font-size: 13px;
    padding: 20px 0;
    color: #333;
    display: flex;
    justify-content: space-between;
  }
</style>
