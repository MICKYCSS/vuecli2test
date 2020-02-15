export default {
  aUpdateInfo (context, payload) {
    return new Promise(resolve => {
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload)
        resolve('it is ok')
      }, 1000)
    })
  }
}
