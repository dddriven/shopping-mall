import {request} from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.sell = columns[0]
    this.collect = columns[1]
    this.services = services
    this.desc = itemInfo.desc
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.logo = shopInfo.shopLogo
    this.sell = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class Params {
  constructor(info, rule) {
    this.set = info.set
    this.rule = rule.tables[0]
  }
}

export class Comment {
  constructor(list) {
    this.photo = list.user.avatar
    this.name = list.user.uname
    this.content = list.content
    this.time = list.created
    this.style = list.style
  }
}
