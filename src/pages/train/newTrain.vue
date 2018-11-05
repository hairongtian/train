<template>
  <div>
    <div class="header">
      <group>
        <x-input title="讲题" placeholder="请填写讲题名称" v-model="topic"></x-input>

      </group>
    </div>
  </div>
</template>

<script>
import {XInput, Group} from 'vux'
export default {
  name: 'newTrain',
  data(){
    return {
      topic: '',
    }
  },
  components:{
    XInput,
    Group
  }
}
</script>

<style lang="less" scoped>
.header{
  background: #FFFFFF
}
</style>
