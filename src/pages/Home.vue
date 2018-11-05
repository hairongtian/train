<template>
  <div class="homePage flex-col">
    <div class="nav flex-row">
      <div class="flex-col navChild">
        <div class="imgDiv flex-col">
          <img src="../assets/img/newTaunt.png" class="img" alt="">
        </div>
        <p>每日一题</p>
      </div>
      <div class="flex-col navChild">
        <div class="imgDiv flex-col">
          <img src="../assets/img/newTaunt.png" class="img" alt="">
        </div>
        <p>积分排行</p>
      </div>
      <router-link :to="{path: '/myTrain',query:{type:'2'}}">
      <div class="flex-col navChild">
        <div class="imgDiv flex-col">
          <img src="../assets/img/newTaunt.png" class="img" alt="">
        </div>
        <p>待培训</p>
      </div>
      </router-link>
      <router-link :to="{path: '/myTrain',query:{type:'1'}}">
      <div class="flex-col navChild">
        <div class="imgDiv flex-col">
          <img src="../assets/img/newTaunt.png" class="img" alt="">
        </div>
        <p>我的培训</p>
      </div>
      </router-link>
      <div class="flex-col navChild">
        <div class="imgDiv flex-col">
          <img src="../assets/img/newTaunt.png" class="img" alt="">
        </div>
        <p>订阅</p>
      </div>
    </div>
    <div class="outSSETrain">
      <p class="sseTrainTitle flex-row">
        <span>外部培训</span>
        <span style="font-size:1.2rem;color:#AEAEAE">更多</span>
      </p>
      <div class="flex-row sseOutTrainContent">
        <div v-for="item in data">
          <SseOutTrainItem :item="item"></SseOutTrainItem>
        </div>
      </div>
    </div>
    <div class="sseTrain">
      <p class="sseTrainTitle flex-row">
        <span>所内培训</span>
        <span style="font-size:1.2rem;color:#AEAEAE">更多</span>
      </p>
      <div class="sseTrainContent">
        <div v-for="item in sseData" class="sseTrainItem">
          <TrainItem :item="item"></TrainItem>
        </div>
      </div>
    </div>
    <router-link :to="{path: '/newTrain'}">
      <div class="newTrainButton">
        <img src="../assets/img/newTaunt.png" alt="">
      </div>
    </router-link>
  </div>
</template>

<script>
import SseOutTrainItem from '@/components/sseOutTrainItem.vue'
import TrainItem from '@/components/trainItem.vue'
export default {
  name: 'rentCar',
  data() {
    return {
      data:[
        {
          imgUrl: require('../assets/img/contact2.png'),
          title: '【读书会】以无声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          personNum:'5',
          applyFlag:1
        },
        {
          imgUrl: require('../assets/img/contact2.png'),
          title: '【读书会】以无声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          personNum:'5',
          applyFlag:1
        }
      ],
      sseData:[
        {
          imgUrl: require('../assets/img/contact2.png'),
          title: '藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'技术开发总部',
          personNum:'5',
          applyFlag:1
        },
        {
          imgUrl: require('../assets/img/contact2.png'),
          title: '【读书会】以无声火花慰藉平凡人生声火花慰藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'系统运行总部',
          personNum:'5',
          applyFlag:1
        },
      ]
    }
  },
  components: {
    SseOutTrainItem,
    TrainItem
  },
  mounted() {

  },
  methods:{

  }
};
</script>

<style lang="less" type="text/css">
.homePage{
  height: 100%;
  width: 100%;
  .nav{
    background: #FFFFFF;
    height: 10rem;
    justify-content: space-around;
    align-items: center;
    font-size: 1.2rem;
    .navChild{
      justify-content: center;
      align-items: center;
      .imgDiv{
        height: 4.5rem;
        width: 4.5rem;
        background: #EEF6FF;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.5rem;
        .img{
          height: 3rem;
          width: 3rem;
        }
      }
    }
  }
  .sseTrainTitle{
      justify-content: space-between;
      align-items: center;
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
  .outSSETrain{
    margin-top:1rem;
    padding: 1rem;
    background: #FFFFFF;
    .sseOutTrainContent{
      overflow-x: auto;
    }
    .sseOutTrainContent::-webkit-scrollbar {
        display: none;
    }
  }
  .sseTrain{
    flex: 1;
    margin-top:1rem;
    padding: 1rem;
    background: #FFFFFF;
    .sseTrainItem{
      width: 100%;
      margin-bottom: 1rem;
      border: 0.1rem solid #EEEEEE;
      border-radius: 5px;
    }
  }
  .newTrainButton{
    position: fixed;
    bottom: 5rem;
    right: 1rem;
    z-index: 1001;
    height: 5rem;
    width: 5rem;
  }
}
</style>
