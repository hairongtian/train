<template>
  <div class="searchPanel flex-row">
    <div class="searchBar">
      <input class="searchBarInput"  v-model.trim="keyWord" @keyup.enter="submiteSearch" @focus="focusFn" placeholder="看看其他伙伴的世界" @blur="blurFn" >
      <i class="deleteKey" @click="clearSeachValHandle" v-show="keyWord">&nbsp;</i>
    </div>
    <div class="searchButtonDiv">
      <a :class="{active: keyWord}" @click="submiteSearch">
        <i  class="searchButton"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchBar',
  data(){
    return {
      keyWord:'',
    }
  },
  methods:{
    blurFn(){

    },
    // 搜索框聚焦
    focusFn(){

    },
    // 提交
    submiteSearch(){
      this.$emit('search',this.keyWord)
    },
    // 清空
    clearSeachValHandle(){
      this.keyWord =''
    }
  }
}
</script>

<style lang="less" scoped>
/*=========搜索======*/
 .searchPanel {
    padding: 0rem;
    background: #fff;
    border: 0.1rem solid #ddd;
    overflow: hidden;
    //padding: 0 10px 0 6px;
    align-items: center;
    margin: 1.5rem;
    .searchBar {
      height: 3.3rem;
      width: 100%;
      align-items: center;
      display: flex;
      padding-left: 0.5rem;
      .searchBarInput{
        border-width: 0rem;
        font-size: 1.4rem;
        width: 100%;
      }
      .searchBarInput:focus{
        width: 100%;
        outline-offset: 0rem !important;
        outline: -webkit-focus-ring-color auto 0.5rem;
        outline-color: #EEEEEE;
        outline-style: auto;
        outline-width: 0rem;
      }
      input {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
      }
      .deleteKey {
        width: 1.7rem;
        height: 1.5rem;
        display: inline-block;
        border-radius: 50%;
        background: url(../assets/img/delete_icon.png) no-repeat center center;
        background-size: 66% auto
      }
    }
    .searchButtonDiv{
      margin:0.3rem 0.5rem 0rem 0.5rem;
      .searchButton{
        width:2.4rem;
        height: 2.4rem;
        display: inline-block;
        border-radius: 50%;
        background: url(../assets/img/search.png) no-repeat center center;
        background-size: 66% auto
      }
      .active .searchButton{
        background: url(../assets/img/searchActive.png) no-repeat center center;
        background-size: 66% auto;
      }
    }

  }
</style>
