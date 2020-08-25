import {
  ADD_COUNT,
  ADD_PRODUCT
} from './mutations_type'

export default {
  [ADD_COUNT](state, payload) {
    payload.count ++
  },
  [ADD_PRODUCT](state, payload) {
    payload.checked = true;
    state.cartList.push(payload)
  }
}
