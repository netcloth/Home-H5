import Vue from 'vue'
<template>
<div class = "Main">
  <div>
    <div v-for="row in $t('m.name').length" class="row1 clearfix" v-bind:class="'row'+row">
      <div v-for="col in $t('m.name['+(row-1)+']').length" class="left" v-bind:class="'item_'+(row)+'_'+col" v-on:click="OpenWindow($t('m.name['+(row-1)+']['+(col-1)+'][2]'))">
        <div class="img" v-bind:style="{ background: $t('m.name['+(row-1)+']['+(col-1)+'][1]'), backgroundSize:'100% 100%' }"></div>
        <div class="text">{{$t("m.name["+(row-1)+"]["+(col-1)+"][0]")}}</div> 
      </div>
    </div>
  </div>
</div>
</template>

<script >
import Vue from 'vue'

export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    OpenWindow:function(url){
      console.log("oepn "+url);
      //window.open(url)
      window.location.href = url;
    }
  },
  created(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../style/common.scss";
.img{
  height:17.0666vw;
  background:#ff0000;
  border-radius: 15px;
  border:0.5px solid #E8E8E8;
}
.text{
  text-align: center;
  white-space:normal; 
  word-break:break-all;
  overflow:hidden;
  margin-top:5px;
  color:#041036;
  font-size:14px;
  line-height:20px;
}
.row{
  margin-top:10px;
}
.row1{
  @extend .row1;
  margin-top:20px;
}
.row2{
  @extend .row1;
  margin-top:10px;
}
.item{ 
  width:17.0666vw;
  margin: 0 6.9333333vw 0 0;
}
.item_1_1{
  @extend .item;
  margin-left:5.333333vw;
}
.item_1_2{
  @extend .item;
}  
.item_1_3{
  @extend .item;
}
.item_1_4{ 
  @extend .item;
  margin-right:5.333333vw;
}
.item_2_1{
  @extend .item_1_1;
}
.item_2_2{
  @extend .item_1_2;
}
.item_2_3{
  @extend .item_1_3;
}
.item_2_4{
  @extend .item_1_4;
}
</style>
