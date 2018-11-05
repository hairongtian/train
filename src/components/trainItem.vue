<template>
  <div class="TrainItem flex-row">
    <div class="imgDiv">
      <img :src="item.imgUrl" class="imgClass" alt="">
    </div>
    <div class="sseTrainItemDiv">
      <p class="trainTitle trainItemTitle">{{item.title}}</p>
      <p class="trainDate" style="padding-top:13px;">
        <span style="margin-right:10px;">{{item.department}}</span>
        <img src="../assets/img/personNum.png" class="personNum" alt="">
        <span>{{item.personNum}}</span>
      </p>
      <div class="sseTrainItemDep flex-row" style="padding-top:5px">
        <span class="trainDate">{{item.dateTime}}</span>
        <p :class="[item.applyFlag ? 'applyButton' : 'cancelApplyButton']"><span v-show="!item.applyFlag">已</span>报名</p>
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
.TrainItem{
  width: 100%;
  background: #FFFFFF;
  .imgDiv{
    height: 9rem;
    width: 9rem;
    .imgClass{
      height: 9rem;
      width: 9rem;
    }
  }
  .sseTrainItemDiv{
    flex: 1;
    padding: 1rem 1rem 0rem 1rem;
    overflow:hidden;
    .trainItemTitle{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .sseTrainItemDep{
    justify-content: space-between;
    align-items: center;
  }
}

</style>
