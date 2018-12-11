<template>
    <div class="container">
        <div class="box1">
            <div class="box1-first">
                <p>Pure CSS masonry layout</p>
            </div>
            <div class="box1-second">
                <ul>
                    <li>Configurable</li>
                    <li>Responsive</li>
                    <li>Supports custers</li>
                </ul>
            </div>
            <div class="box1-three"></div>
        </div>
        <div class="box2">
            <div class="box2-first">
                <div class="box2-first-one">
                    <p>A</p>
                </div>
                <div class="box2-first-two">
                    <div class="smallBox">
                        <p>vertically</p>
                    </div>
                    <div class="smallBox">
                        <p>flowed</p>
                    </div>
                    <div class="smallBox">
                        <p>cluster</p>
                    </div>
                </div>
            </div>
            <div class="box2-second"></div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.container{
    background-color: #2e9fff;
    border: 1px solid #2e9fff;
    padding: 10px;
    display: flex; /* 这里设置容器为flex容器*/
}
.container > div{
    flex: 1; /*第一个div设置为flex1  铺满*/
}
.box1-first, .box1-second{
    border: 4px solid #ffffff;
    border-radius: 10px;
    padding: 40px 20px;
}
.box1-second{
    padding: 10px 5px;
    margin: 20px 0;
}
.box1-first p{
    font-size: 20px;
    color: #ffffff;
}
.box1-second ul li{
    font-size: 20px;
    color: #ffffff;
}
.box1-three{
    border-radius: 10px;
    border: 4px solid transparent;
    height: 400px;
    background-color: red;
}
.box2{
    margin-left: 20px;
}
.box2-first{
    height: 400px;
    display: flex; /*这里设置右边盒子的第一个div为flex容器 并铺满*/
    flex: 1;
}
.box2-first-one{
    border: 4px solid #ffffff;
    border-radius: 10px;
    margin-right: 20px;
    width: 200px; /*宽度定义*/
}
.box2-first-two{
    flex: 1; /*右边第一个盒子内的第二个div自动铺满*/
}
.box2-first-one p{
    color: #ffffff;
    font-size: 20px;
}
.box2-second{
    height: 315px;
    background-color: green;
    border: 4px solid transparent;
    border-radius: 10px;
    margin-top: 20px;
}
.smallBox{
    border: 4px solid #ffffff;
    border-radius: 10px;
    margin-bottom: 26px;
    padding: 20px 10px;
}
.smallBox p{
    font-size: 20px;
    color: #ffffff;
}
</style>
