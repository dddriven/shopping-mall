<template>
  <div class="detail">
    <detail-nav-bar :titles="['商品', '参数', '评论', '推荐']"
                    class="nav"
                    @titleClick="titleClick"
                    ref="nav"/>
    <scroll class="content"
            ref="scroll"
            @scroll="scroll"
            :probeType="3">
      <detail-swiper :topImages="topImages"/>
      <goods-info :goods="goods"/>
      <detail-shop-info :shop-info="shopInfo"/>
      <detail-images :shopImages="shopImages" @detailImageLoad="detailImageLoad"/>
      <detail-params-info :paramsInfo="paramsInfo" ref="params"/>
      <detail-comment :comment="comment" ref="commend"/>
      <detail-recommend :recommend="recommend" ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addCart="addCart"/>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import GoodsInfo from './childComps/GoodsInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailImages from './childComps/DetailImages'
  import DetailParamsInfo from './childComps/DetailParamsInfo'
  import DetailComment from './childComps/DetailComment'
  import DetailRecommend from './childComps/DetailRecommend'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'common/scroll/Scroll'

  import { itemListenerMixin, backTopMixin } from '../../common/mixins'
  import { debounce } from '../../common/utils'

  import { getDetail, Goods, ShopInfo, Params, Comment, getRecommend } from 'network/detail'

  import { mapActions } from 'vuex'

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shopInfo: {},
        shopImages: {},
        paramsInfo: {},
        comment: {},
        recommend: [],
        offsetTopY: [],
        getOffsetTopY: null,
        currentIndex: 0
      }
    },
    mixins: [ itemListenerMixin, backTopMixin ],
    components: {
      DetailNavBar,
      DetailSwiper,
      GoodsInfo,
      DetailShopInfo,
      DetailImages,
      DetailParamsInfo,
      DetailComment,
      DetailRecommend,
      DetailBottomBar,
      Scroll
    },
    created() {
      this.iid = this.$route.params.iid

      getDetail(this.iid).then(res => {
        const data = res.result
        this.topImages.push(...data.itemInfo.topImages)
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shopInfo = new ShopInfo(data.shopInfo)
        this.shopImages = data.detailInfo
        this.paramsInfo = new Params(data.itemParams.info, data.itemParams.rule)
        this.comment = new Comment(data.rate.list[0])
      })

      getRecommend().then(res => {
        this.recommend = res.data.list
      })

      this.getOffsetTopY = debounce(() => {
        this.offsetTopY = []
        this.offsetTopY.push(0)
        this.offsetTopY.push(this.$refs.params.$el.offsetTop)
        this.offsetTopY.push(this.$refs.commend.$el.offsetTop)
        this.offsetTopY.push(this.$refs.recommend.$el.offsetTop)
        this.offsetTopY.push(Number.MAX_VALUE)
      }, 100)
    },
    mounted() {
    },
    distroyed() {
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
    methods: {
      ...mapActions({
        'add': 'addCart'
      }),
      detailImageLoad() {
        this.newRefresh()
        this.getOffsetTopY()
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.offsetTopY[index], 100)
      },
      scroll(position) {
        this.listenShowBackTop(position)
        for(let i = 0; i < this.offsetTopY.length - 1; i++) {
          if(this.currentIndex!==i && (-position.y>=this.offsetTopY[i] && -position.y<this.offsetTopY[i+1])) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      addCart() {
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.id = this.iid
        product.price = this.goods.realPrice

        this.add(product).then(res => {
          this.$toast.show(res, 1500)
        })
      }
    }
  }
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px - 49px);
  }
</style>
