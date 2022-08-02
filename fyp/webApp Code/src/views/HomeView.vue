<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main >
   <div class="row">
    <div class="col col-6">
      <div class="h3"> Power Usage(Watt)</div>
      <apexchart  height="400" type="area" :options="options" :series="series"></apexchart>
      </div>
    <div class="col col-6">
      <div class="h3"> Enegy  Usage(Kwh)</div>
      <apexchart  height="400"  type="donut" :options="options1" :series="series1"></apexchart>
      </div>
    <!-- 
     -->
   </div>
  
  </main>
</template>
<script>
export default {
  data:()=>{
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ['june28', 'june29', 'june30', 'july1', 'july2', 'july3', 'july4', 'july5']
        }
      },
      series: [{
        name: 'tenant1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: 'tenant2',
        data: [30, 37, 44, 50, 47, 36, 67, 100]
      }
      ]
      ,
      options1: {
         labels:['tenant1','tenant2']
      },
      series1: [44,64]
    }
  }
}
</script>
