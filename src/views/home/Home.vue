<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick"
                  class="tab-control"
                  v-show="isTabFixed"
                  ref="tabControl1"/>
    <scroll class="content"
            ref="scroll"
            @scroll="contentScroll"
            :probeType="3"
            @pullingUp="loadMore"
            :pullUpLoad="true">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行', '新款', '精选']"
                    @tabClick="tabClick"
                    ref="tabControl2"/>
      <goods-list :goods="goods[currentType].list"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import Recommend from './childComps/Recommend'
  import FeatureView from './childComps/FeatureView'
  import NavBar from 'common/navbar/NavBar'
  import TabControl from 'content/tabControl/TabControl'
  import GoodsList from 'content/goods/GoodsList'
  import Scroll from 'common/scroll/Scroll'
  import {getHomeMultidata, getHomeGoods} from 'network/home'
  import { itemListenerMixin, backTopMixin } from '../../common/mixins'
  export default {
    name: "Home",
    components: {
      HomeSwiper,
      Recommend,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    mixins: [ itemListenerMixin, backTopMixin ],
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
    methods: {
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      contentScroll(position) {
        this.listenShowBackTop(position)
        this.isTabFixed = (-position.y) >= this.tabOffsetTop
      },
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
        if(this.$refs.scroll){
          this.$refs.scroll.finishPullUp()
        }
      }
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }

  .tab-control {
    position: relative;
    z-index: 9;
    background: #fff;
  }
</style>
