// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase ,ref, set,onValue} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV7_iVH-A6XS-WDm2Xb0xq6WdGL0t93gI",
  authDomain: "enegymonitor.firebaseapp.com",
  databaseURL: "https://enegymonitor-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "enegymonitor",
  storageBucket: "enegymonitor.appspot.com",
  messagingSenderId: "405657486464",
  appId: "1:405657486464:web:ede72d95adb400af795265",
  measurementId: "G-WVSBCNQZ86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase(app);
var tenantPowerRef= ref(database,'user/tenants-power')

const updateTenantPower=(ctx)=>{
    onValue(tenantPowerRef,(snapshot)=>{
        var  value = snapshot.val()
        if(value[0]==1){
            ctx.commit('turnOnPowerTenant1',true)
        }
        else{
            ctx.commit('turnOnPowerTenant1',false)
        }
        if(value[1]==1){
            ctx.commit('turnOnPowerTenant2',true)
        }
        else{
            ctx.commit('turnOnPowerTenant2',false)
        }

    })

 
}



const setTenant1Power= (ctx,value)=>{
    ctx.commit('turnOnPowerTenant1',value);
    var serverValue = 1
    if(!value) serverValue=0
    set(ref(database,'user/tenants-power/0'),serverValue)
    
    }
      

const  setTenant2Power=(ctx,value)=>{
    ctx.commit('turnOnPowerTenant2',value);
    var serverValue = 1
    if(!value) serverValue=0
    set(ref(database,'user/tenants-power/1'),serverValue)
    
    }
        
        
export {

    updateTenantPower ,setTenant1Power,setTenant2Power   
}