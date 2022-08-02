#include <MsTimer2.h>

#include <SoftwareSerial.h>
SoftwareSerial sim(10,11);
String serverIp = "176.58.105.204";
String port      = "8060";
bool connected = false;
int tenant1=6,tenant2=7;
void setup() {
Serial.begin(9600);
  sim.begin(9600);
  pinMode(tenant1,OUTPUT);
  pinMode(tenant2,OUTPUT);
  digitalWrite(tenant1,1);
  digitalWrite(tenant1,1);

  
  Serial.println("*************************** STARTING SYSTEM  **************************************************");
  delay(5000);
  while(sim.available()){
    Serial.write(sim.read());
  }
  
  Serial.println("***************************BEGIN CONNECTION**************************************************");
  
  sim.println("AT+CIPSTART=\"TCP\",\"176.58.105.204\",8060\r");

  while(!connected){
    if(sim.available()){
      String response = sim.readString();
      Serial.println(response);
      if(response.lastIndexOf("CONNECT OK")!=-1){
        connected=true;
        Serial.println("*************************** CONNECTED**************************************************");
      }
      
    }
    
  }
//  MsTimer2::set(10000,sendData); // 500ms period
//  MsTimer2::start();
}

void sendData(){
  sim.println("AT+CIPSEND\r");
  delay(100);
  int wait=0;
  bool ready=false,ack=false;
  while(!ready && wait<60){
    if(sim.available()){
      String response = sim.readString();
      //Serial.println(response);
      checkSwitchSignal(response);
      if(response.lastIndexOf(">")!=-1){
        ack=true;
        sim.println("230,60,100,\r");
        delay(100);
        sim.print((char)26);
      }
      if(response.lastIndexOf("SEND OK")!=-1){
        ready=true;
      }
      
      
    }
    delay(100);
    wait++;
  }
  
  
}

void loop() {
  while(Serial.available()){
    sim.write(Serial.read());
  }

  while(sim.available()){
    String response = sim.readString();
      Serial.println(response);
      checkSwitchSignal(response);
  }

  sendData();

}

void checkSwitchSignal(String response){
  int indexOfPower = response.lastIndexOf("power:");
  if(indexOfPower!=-1){
    Serial.println("WE GET COMMAND TO POWER");
    
    Serial.print("tenant1 ");
    if(response.charAt(indexOfPower+6)=='1'){
      digitalWrite(tenant1,1);
      Serial.print(" ON ");
    }
    else{
      digitalWrite(tenant1,0);
      Serial.print(" OFF ");
    }
    
    Serial.print("tenant2 ");
    
    if(response.charAt(indexOfPower+8)=='1'){
      digitalWrite(tenant2,1);
      Serial.println(" ON ");
    }
    else{
      digitalWrite(tenant2,0);
      Serial.print(" OFF ");
    }
  }
}
