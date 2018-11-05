<template>
  <div id="app">
		<transition name="router-fade" mode="out-in">
			<router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" type="text/css">
#app{
  height: 100%
}
</style>
