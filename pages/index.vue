<template>
  <section class="uk-container">
    <div>

      <h2>Colors</h2>

      <!-- <table class="uk-table"> -->
      <ul>
        <li v-for="o in items">
          <span class="tip" :style="'background: #'+o.hex"></span>{{o.hex}} <span v-if="o.label">: {{o.label}}</span>
        </li>
      </ul>





      <h3 class="uk-title">hogegege</h3>

      <table class="uk-table">
        <tr>
          <th>hoge</th>
          <td>yesss</td>
        </tr>
      </table>

      <ul class="uk-tab">
        <li class="uk-active"><a href="">SPEC</a></li>
        <li><a href="">GUIDELINE</a></li>
        <li class="uk-disabled"><a>INQUERY</a></li>
      </ul>



      <logo />



    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import axios from 'axios'

  export default {
    components: {
      Logo
    },
    async asyncData(context) {
      console.log('data load start')

      // this.items = [{ "hex":91, "label": 'piolet' }]
      // let { res } = await axios.get('http://localhost:3000/colors.json')
      const {
        data
      } = await axios.get('http://localhost:3000/colors.json')

      console.log('data loaded')
      return {
        items: data.colors
      }
    }
  }

</script>

<style lang="scss" scoped>
ul { display: flex; flex-wrap: wrap; width: 100%; }
li {
  font-size: 2rem;
  display: inline-block; 
  flex-basis: 20%;
  padding-bottom: 10px;
  .tip {

    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 4px;
  }
}

</style>
