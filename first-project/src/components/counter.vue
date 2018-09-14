<template>
    <div class="box">
      <button @click="reduce">---</button>
      <strong>{{count}}</strong>
      <button @click="add">+++</button>
      <br>
      <button @click="handleBrother">
        兄弟组件传值
      </button>
    </div>
</template>

<script>
   import {mapState} from 'vuex'
   import bus from '../bus'
    export default {
      data() {
        return {
          msg: '来自兄弟组件的值'
        }
      },
      name: "counter",
      methods: {
        reduce() {
          this.$store.commit('REDUCE_COUNT')
          },
        add() {
          this.$store.commit('ADD_COUNT')
        },
        handleBrother() {
          bus.$emit('toData', this.msg)
        }
      },
      computed: {
        ... mapState(['count'])
      }
    }
</script>

<style scoped lang="scss">
  .box{
    font-size: 28px;
    button{
      width: 50px;
      font-size: 28px;
    }
  }

</style>
