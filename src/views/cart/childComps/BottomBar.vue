<template>
  <div class="bottom-menu">
    <check-buttom class="select-all" :is-check="isSelectAll" @click.native="checkClick"/>
    <span>全选</span>
    <span class="total-price">合计：{{totalPrice}}</span>
    <span class="buy-product">去计算({{selectLength}})</span>
  </div>
</template>

<script>
  import CheckButtom from 'content/checkButtom/CheckButtom'
  export default {
    name: "BottomBar",
    components: {
      CheckButtom
    },
    computed: {
      isSelectAll() {
        if(this.$store.state.cartList.length === 0) {
          return false
        }
        return !(this.$store.state.cartList.filter(item => !item.checked).length)
      },
      totalPrice() {
        return '￥' + this.$store.state.cartList.filter(item => item.checked).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0)
      },
      selectLength() {
        return this.$store.state.cartList.filter(item => item.checked).length
      }
    },
    methods: {
      checkClick() {
        if(this.isSelectAll) {
          this.$store.state.cartList.forEach(item => item.checked = false)
        } else {
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>

<style>
  .bottom-menu {
    width: 100%;
    height: 44px;
    line-height: 44px;
    position: fixed;
    bottom: 49px;
    left: 0;
    padding-left: 35px;
    background-color: #eee;
    font-size: 14px;
    color: #888;
  }

  .select-all {
    position: absolute;
    line-height: 0;
    top: 12px;
    left: 12px;
  }

  .total-price {
    margin-left: 20px;
    font-size: 16px;
    color: #666;
  }

  .buy-product {
    width: 100px;
    height: 44px;
    float: right;
    background-color: orangered;
    text-align: center;
    color: #fff;
  }
</style>
