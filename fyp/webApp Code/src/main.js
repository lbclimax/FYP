import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
// Import styles
import VueApexCharts from "vue3-apexcharts";
import { createStore } from 'vuex'
import{ updateTenantPower,setTenant2Power,setTenant1Power} from './firebase.js'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      tenant1Power:false,
      tenant2Power:false,

    }
  },
  mutations: {
    turnOnPowerTenant1(state,value) {
      state.tenant1Power=value;
    },
    turnOnPowerTenant2(state,value) {
        state.tenant2Power=value;
      },

  },
  actions:{
    updateTenantPower,setTenant1Power
    ,setTenant2Power
  }
})



const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueApexCharts);

app.mount('#app')
