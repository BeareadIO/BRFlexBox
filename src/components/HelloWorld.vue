<template>
  <div class="hello">
    <div><img src="../assets/logo.png"></div>
    <h1>{{ msg }}</h1>
    <h2>这是基于vue框架搭建的一个flexbox布局Demo</h2>
    <p>点击按钮出发吧</p>
    <button class="btn" @click="goPage">flexBox</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to  Vue.js '
    }
  },
  methods: {
    goPage () {
      this.$router.push({
        path: '/flexBox'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.btn{
  width: 100px;
  font-size: 16px;
  padding: 10px 15px;
  text-align: center;
  color: #ffffff;
  background-color: #2e9fff;
  border: 1px solid #2e9fff;
  border-radius: 100px;
  cursor: pointer;
}
</style>
