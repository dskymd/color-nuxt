<template>
    <aside class="logo">
      <h1>logo</h1>

      <strong>Items:</strong>
      <!-- {{items}} -->

    </aside>
</template>

<script>
  import axios from 'axios'

    console.log('logo.vue')


  export default {
    

    async asyncData(context) {
      console.log( 1222 )
      
      const { data } = await axios.get('http://localhost:3000/colors.json')
      console.log( 1222 )
      return { items: data.colors }
    }


  }

</script>

<style lang="scss">
  .logo {
    background: #F90;
    padding: 20px;
  }

</style>
