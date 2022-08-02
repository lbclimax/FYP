<script setup>
import TheWelcome from '@/components/TheWelcome.vue'

</script>

<template>
  <main>
    <span class="h2"> To switch power press below switch buttons</span>
    <div class="row">
      <div class="col-6">
        <span>TEANT1</span>
        <Toggle v-model="tenant1" />
      </div>
      <div class="col-6">
        <span>TEANT2</span>
        <Toggle v-model="tenant2" />
      </div>

    </div>


  </main>
</template>
<style src="@vueform/toggle/themes/default.css"></style>

<script>
import Toggle from '@vueform/toggle'
export default {
  components:{Toggle},
  data: () => {
    return {
    }
  },
  computed:{
    tenant1:{
      set(newValue){
 this.$store.dispatch('setTenant1Power',newValue)
      },
      get(){
        return this.$store.state.tenant1Power
      }
    },
    tenant2:{
      set(newValue){
        this.$store.dispatch('setTenant2Power',newValue)

      },
      get(){
        return this.$store.state.tenant2Power
      }
    }

  }

}
</script>
