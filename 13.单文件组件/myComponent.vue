<template>
  <div class="hello">
    hi,{{ who }}
  </div>
</template>
<script>
module.exports = {
  data(){
    return {
      who : 'vue'
    }
  },
  computed:{
    who2(){
      return this.who + '2'
    }
  }
}
</script>

<style>
.hello{
  font-size: 100px;
  background-color: #ddd;
}
</style>
