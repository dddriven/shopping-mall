<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" @load="imageLoad" :key="showImage">
    <div class="goods-info">
      <p>{{showTitle}}</p>
      <span class="price">{{showPrice}}</span>
      <span class="collect">{{showCollect}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      },
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      },
      showTitle() {
        return this.goodsItem.title
      },
      showPrice() {
        return this.goodsItem.price
      },
      showCollect() {
        return this.goodsItem.cfav
      }
    }
  }
</script>

<style scoped>
	.goods-item {
		position: relative;
    width: 48%;
    padding-bottom: 40px;
	}

	.goods-item img{
		width: 100%;
    border-radius: 5px;
	}

	.goods-info{
		position: absolute;
    overflow: hidden;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 12px
	}

	.goods-info p {
		overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
	}

	.goods-info .price{
		margin-right: 20px;
    color: var(--color-high-text);
	}

	.goods-info .collect {
		position: relative;
	}

	.goods-info .collect::before {
		position: absolute;
    content: '';
    left: -16px;
    top: -1px;
    width: 14px;
    height: 14px;
		background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
	}
</style>
