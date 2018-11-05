<template>
  <div class="wrapper">
    <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :auto-fill="false" :bottom-all-loaded="allLoaded" ref="loadmore" :maxDistance="150">
      <slot></slot>
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{'is-rotate' : bottomStatus === 'drop'}">↑<span>上拉加载</span></span>
        <span v-show="bottomStatus === 'loading'" style="display:flex;justify-content:center">
          <mt-spinner type="snake"></mt-spinner>
        </span>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
export default {
  data(){
    return {
      allLoaded: false,
      bottomStatus: '',
    }
  },
  props:['pageNum','pages'],
  methods:{
     handleBottomChange(status) {
        console.log(status)
        this.bottomStatus = status;
      },
      loadBottom() {
        setTimeout(() => {
          if (this.pageNum <= this.pages) {
            this.$emit('loadData')
            if(this.pageNum == this.pages){
              this.allLoaded = true
            }
          }
          // else {
          //   console.log("第几次")
          //   this.allLoaded = true;
          // }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
    },
  }
}
</script>

<style lang="less" >

@component-namespace page {
    @component loadmore {
      @descendent wrapper {
        overflow: scroll;
      }
      .mint-spinner {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  @component mint-loadmore-bottom {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;
      @when rotate {
        transform: rotate(180deg);
      }
    }
  }
</style>
