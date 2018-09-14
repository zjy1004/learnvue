<template>
    <div>
      <h2>小计:{{$store.getters.totalPrice}}</h2>
      <br>
      <h2>{{msg}}</h2>
    </div>
</template>

<script>
    import bus from '../bus'

    export default {
      data() {
        return {
          msg: ''
        }
      },
      created() {
        bus.$on('toData', (msg) => {
          this.msg = msg
        })
      },
      name: "counterB",

      computed: {
      }

    }
</script>

<style scoped>

</style>
