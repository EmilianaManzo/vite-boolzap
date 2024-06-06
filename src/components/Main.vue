
<script>
  import Aside from './partials/Aside.vue'
  import Chat from './partials/Chat.vue'

  export default {
    components:{
      Aside,
      Chat
    },
    data(){
      return{

      }
    },
 
    
  }
</script>

<template>

  <div>
    <Aside />
  </div>

  <div>
    <Chat />
  </div>



</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss'
</style>