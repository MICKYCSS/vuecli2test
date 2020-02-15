export default {
  //   方法
  increment (state) {
    state.counter++
  },
  decrement (state) {
    state.counter--
  },
  addCount (state, count) {
    // console.log(count)
    // state.counter += count
    // state.test.age = 18
    // Vue.set(state.test,'age',18)
  },
  updateInfo (state) {
    state.test.name = 'css'
  }

}
