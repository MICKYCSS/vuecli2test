export default {
  more20stu (state) {
    return state.students.filter(f => f.age > 20)
  },
  more20stulength (state, getters) {
    return getters.more20stu.legth
  },
  moreAgestu (state) {
    return age => {
      return state.students.filter(f => f.age > age)
    }
  }

}
