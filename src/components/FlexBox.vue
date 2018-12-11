<template>
    <div class="container">
        <div>
            <ul :class="featBtnClass">
                <li :class="change">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
            <div class="featBtn">
                <button @click="clickBtn('coulmnSty')">纵向</button>
                <button @click="clickBtn('coulmnReverse')">纵向反转</button>
                <button @click="clickBtn('rowSty')">横向</button>
                <button @click="clickBtn('rowReverse')">横向反转</button>
                <button @click="clickBtn('leftSty')">向左排列</button>
                <button @click="clickBtn('rightSty')">向右排序</button>
                <button @click="clickBtn('centerSty')">居中排序</button>
                <button @click="clickBtn('spaceBetween')">两端对齐</button>
                <button @click="clickBtn('spaceAround')">相同空间</button>
                <button @click="clickBtnLi()">改变位置</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      featBtnClass: '',
      change: ''
    }
  },
  methods: {
    clickBtn (type) {
      this.featBtnClass = type
    },
    clickBtnLi () {
      this.featBtnClass = 'rowSty'
      this.change = 'changeOrder'
    }
  }
}
</script>
<style scoped>
 ul{
     list-style-type: none;
 }
 ul li{
     border: 1px solid black;
     width: 100px;
     height: 100px;
     background-color: #22eeff;
     color: black;
     margin: 10px;
 }
 .featBtn button{
     width: 100px;
     border-radius: 100px;
     border: 1px solid green;
     background-color: green;
     padding: 5px 10px;
     font-size: 14px;
     color: #ffffff;
 }
 .centerSty{
     display: flex;
     flex-direction: row;
     justify-content: center;
 }
 .rowSty{
     display: flex;
     flex-direction: row;
 }
 .rightSty{
     display: flex;
     flex-direction: row;
     justify-content: flex-end;
 }
 .leftSty{
     display: flex;
     flex-direction: row;
     justify-content: flex-start;
 }
 .coulmnSty{
     display: flex;
     flex-direction: column;
 }
 .coulmnReverse{
     display: flex;
     flex-direction: column-reverse;
 }
 .rowReverse{
     display: flex;
     flex-direction: row-reverse;
 }
 .spaceBetween{
     display: flex;
     flex-direction: row;
     justify-content: space-between;
 }
 .spaceAround{
     display: flex;
     flex-direction: row;
     justify-content: space-around;
 }
 .changeOrder{
     order: 1
 }
</style>
