<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shopInfo.logo">
      <span class='title'>{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shopInfo.sell | sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shopInfo.goods}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}">
              <span>{{item.isBetter ? '高' : '低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">
        进店逛逛
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      sellCountFilter(value) {
        if (value > 10000) {
          return (value / 10000).toFixed(1) + '万'
        }
        return value
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid rgba(0, 0, 0, .1);
    color: #333;
  }

  .shop-top {
    display: flex;
    align-items: center;
  }

  .shop-top img {
    width: 45px;
    height: 45px;
  }

  .title {
    margin-left: 10px;
  }

  .shop-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .shop-middle-item {
    flex: 1;
  }

  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    border-right: 1px solid rgba(0, 0, 0, .1);
    text-align: center;
  }

  .sells-text, .goods-text {
    font-size: 12px;
    margin-top: 10px;
  }

  .shop-middle-right {
    margin-left: 30px;
    font-size: 13px;
  }

  .shop-middle-right table {
    width: 120px;
  }

  .shop-middle-right table td {
    padding: 5px 0;
  }

  .shop-bottom {
    margin-top: 10px;
    text-align: center;
  }

  .enter-shop {
    display: inline-block;
    width: 150px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
    font-size: 14px;
    background-color: #f2f5f8;
  }

  .better span{
    background-color: #5ea732;
    color: #fff;
  }

  .better-more span{
    background-color: #f13e3a;
  }

  .score {
    color: #5ea732;
  }

  .score-better {
    color: #f13e3a;
  }
</style>
