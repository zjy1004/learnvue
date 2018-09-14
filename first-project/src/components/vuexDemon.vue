<template>
    <div class="box">
      <h2>单价：{{this.$store.state.price}}</h2>
      <br>
      <counter></counter>
      <br>
      <counter-b></counter-b>
      <br>
      <input type="text" v-model="count">
      <button @click="CHANGE_COUNT(count)">改变count</button>
      <br>
      <button @click="hadleAsync">
        异步操作
      </button>
    </div>
</template>

<script>
  import counter from './counter'
  import counterB from './counterB'
  import {mapMutations} from 'vuex'
    export default {
    data () {
        return {
          count: ''
        }
    },
    components: {
      counter,
      counterB,
    },
      methods: {
        changeCount() {
          this.$store.commit('CHANGE_COUNT', this.count)
        },
        hadleAsync() {
          // setTimeout(() => {
          //   this.CHANGE_COUNT(this.count)
          // }, 1000)
          this.$store.dispatch('handleAsyncAction', 998)
        },
        ...mapMutations(['CHANGE_COUNT'])
      },
        name: "vuexDemon"
    }
</script>
<style scoped lang="scss">
  .box{

    /*display: flex;*/
  /*align-items: center;*/
  }

</style>
