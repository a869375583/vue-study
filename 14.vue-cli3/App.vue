<template>
  <div class="app">
    App - {{ msg }}
  </div>
</template>
<script>
export default {
  data(){
    return{
      msg:'hi,vue'
    }
  }
}
</script>
<style>
.app{
  font-size: 50px;
}
</style>