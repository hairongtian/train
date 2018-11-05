<template>
  <div class="home flex-col">
    <div class="header">
      <mt-navbar v-model="type">
        <mt-tab-item id="1">报名的培训</mt-tab-item>
        <mt-tab-item id="2">发起的培训</mt-tab-item>
      </mt-navbar>
      <SearchBar @search="searchParent(keyWord)"></SearchBar>
    </div>
    <div class="content">
      <mt-tab-container v-model="type">
        <mt-tab-container-item id="1">
          <div class="contentLoadMore">
            <LoadMore :pageNum="pageNum" :pages="pages"  @loadData="loadData">
              <TrainItem :item="item" v-for="item in applyTrainList" style="margin-bottom:10px"></TrainItem>
            </LoadMore>
            <p v-show="this.pageNum>this.pages" class="noMoreData">没有更多数据了</p>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <LoadMore :pageNum="pageNum" :pages="pages"  @loadData="loadData">

          </LoadMore>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import TrainItem from '@/components/trainItem.vue'
import LoadMore from '@/components/loadMore.vue'
import SearchBar from '@/components/searchBar.vue'
export default {
  name: 'myTrain',
  data(){
    return {
      type: '1',
      pageSize: 10,
      pages: 2,
      totalCount: 0,
      pageNum: 2,
      applyTrainList:[
        {
          imgUrl: require('../../assets/img/contact2.png'),
          title: '藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'技术开发总部',
          personNum:'5',
          applyFlag:1
        },
        {
          imgUrl: require('../../assets/img/contact2.png'),
          title: '【读书会】以无声火花慰藉平凡人生声火花慰藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'系统运行总部',
          personNum:'5',
          applyFlag:1
        },
        {
          imgUrl: require('../../assets/img/contact2.png'),
          title: '藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'技术开发总部',
          personNum:'5',
          applyFlag:1
        },
        {
          imgUrl: require('../../assets/img/contact2.png'),
          title: '【读书会】以无声火花慰藉平凡人生声火花慰藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'系统运行总部',
          personNum:'5',
          applyFlag:1
        },
        {
          imgUrl: require('../../assets/img/contact2.png'),
          title: '藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'技术开发总部',
          personNum:'5',
          applyFlag:1
        },
        {
          imgUrl: require('../../assets/img/contact2.png'),
          title: '【读书会】以无声火花慰藉平凡人生声火花慰藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'系统运行总部',
          personNum:'5',
          applyFlag:1
        },
        {
          imgUrl: require('../../assets/img/contact2.png'),
          title: '藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'技术开发总部',
          personNum:'5',
          applyFlag:1
        },
        {
          imgUrl: require('../../assets/img/contact2.png'),
          title: '【读书会】以无声火花慰藉平凡人生声火花慰藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'系统运行总部',
          personNum:'5',
          applyFlag:1
        },
        {
          imgUrl: require('../../assets/img/contact2.png'),
          title: '藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'技术开发总部',
          personNum:'5',
          applyFlag:1
        },
        {
          imgUrl: require('../../assets/img/contact2.png'),
          title: '【读书会】以无声火花慰藉平凡人生声火花慰藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'系统运行总部',
          personNum:'5',
          applyFlag:1
        },
        {
          imgUrl: require('../../assets/img/contact2.png'),
          title: '藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'技术开发总部',
          personNum:'5',
          applyFlag:1
        },
        {
          imgUrl: require('../../assets/img/contact2.png'),
          title: '【读书会】以无声火花慰藉平凡人生声火花慰藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'系统运行总部',
          personNum:'5',
          applyFlag:1
        },

      ]
    }
  },
  components:{
    SearchBar,
    LoadMore,
    TrainItem
  },
  methods:{
    searchParent(keyWord){
      console.log(keyWord)
    },
    loadData(){
      this.pageNum++
      for(let i = 0; i<10;i++){
        let item = {
          imgUrl: require('../../assets/img/contact2.png'),
          title: '【读书会】以无声火花慰藉平凡人生声火花慰藉平凡人生人生声火花慰藉平凡人生',
          dateTime:'2018-10-19',
          department:'系统运行总部',
          personNum:'5',
          applyFlag:1
        }
        this.applyTrainList.push(item)
      }
      console.log(this.applyTrainList)
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  height: 100%;
  width: 100%;
  .header{
    height: 11rem;
  }
  .content{
    flex:1;
    overflow: auto;
  }
  .noMoreData{
    color: #7C8490;
    font-size: 1.2rem;
    text-align: center;
    margin: 1rem 0rem;
  }
}
</style>
