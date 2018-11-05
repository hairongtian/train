<template>
  <div class="sseOutTrainItem">
    <img :src="item.imgUrl" height="73.5px" width="170px" alt="">
    <div class="trainContentDiv">
      <p class="trainTitle pad" >{{item.title}}</p>
      <div class="trainDate pad flex-row dateAndTime">
        <p>{{item.dateTime}}</p>
        <p>
          <img src="../assets/img/personNum.png" class="personNum" alt="">
          <span>{{item.personNum}}</span>
        </p>
      </div>
      <div class="pad flex-row buttonDiv">
        <p :class="[item.applyFlag ? 'applyButton' : 'cancelApplyButton']"><span v-show="!item.applyFlag">已</span>报<span v-show="item.applyFlag">&nbsp;</span>名</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sseOutTrainItem',
  data(){
    return {

    }
  },
  //props: ['imgUrl','title','dateTime','personNum','applyFlag']
  props:{
    item: Object
  }
}
</script>

<style lang="less" scoped>
.sseOutTrainItem{
  width: 17rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #EEEEEE;
}
.trainContentDiv{
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  .pad{
    padding-top:1rem;
  }
  .dateAndTime{
    justify-content: space-between;
    align-items: center;
  }
  .buttonDiv{
    justify-content: flex-end;
    padding-bottom: 1rem;
  }
  .cancelApplyButton{

  }
}
</style>
