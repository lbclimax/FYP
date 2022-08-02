<script setup>
import TheWelcome from '@/components/TheWelcome.vue'

</script>

<template>
  <main >
    <span class="h2">BILLING CALCULATION</span>
   <form class="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="enter Amount ">
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Enter AMOUNT</label>
    <input type="text" class="form-control" id="inputPassword2" placeholder="amount">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Calculate</button>
  </div>
  <span>TENANT 1  PAYS : TSH </span>
</form>
  
  </main>
</template>
<script>
export default {
  data:()=>{
    return {
      amount:0,
    }
  },
  computed:{
    tenantAmount(){
      return this.amount*0.593;
    }
  }
}
</script>
