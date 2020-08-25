import {
  ADD_COUNT,
  ADD_PRODUCT
} from './mutations_type'

export default {
  addCart(context, payload) {
    return new Promise(resolve => {
      let oldProduct = context.state.cartList.find(item => item.id === payload.id)
      
      if(oldProduct) {
        context.commit(ADD_COUNT, oldProduct)
        resolve('当前的商品数量+1')
      } else {
        payload.count = 1
        context.commit(ADD_PRODUCT, payload)
        resolve('添加了新商品')
      }
    })
  }
}
