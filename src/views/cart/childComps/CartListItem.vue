<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <check-buttom :is-check="product.checked" @click.native="checkClick"/>
    </div>
    <div class="item-img">
      <img :src="product.image">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">商品描述：{{product.desc}}</div>
      <div class="info-bottom">
        <div class="info-price left">￥{{product.price}}</div>
        <div class="info.count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButtom from 'content/checkButtom/CheckButtom'
  export default {
    name: "CartListItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButtom
    },
    methods: {
      checkClick() {
        this.product.checked = !this.product.checked
      }
    }
  }
</script>

<style scoped>
  .cart-list-item {
    display: flex;
    width: 100%;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0px;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
  }

  .item-img img {
    width: 80px;
    height: 100px;
   /* display: block; */
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .info-price {
    color: orangered;
  }
</style>
