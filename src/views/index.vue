<template>
  <div>
    <router-link :to="{ name: 'termsofservice'}">Terms Of Service</router-link> <br>
    <router-link :to="{ name: 'safety'}">Safety</router-link> <br>
    <router-link :to="{ name: 'communityguideline'}">Community Guide Line</router-link> <br>
    <router-link :to="{ name: 'privacy'}">Privacy</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'Index',
  components: {
    
  }
})
export default class extends Vue {
  
}
</script>

<style lang="scss" scoped>

</style>
