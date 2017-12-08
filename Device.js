//Defines how all Devices with work.

function Device(t,ma,c){
  this.type = t;
  this.milliamps = ma;
  this.capacilty = c;
  this.juice = 1;
  this.rate = [0.0015,0.0235,0.23];

this.power(){
  this.power = ma / c;
  return this.power * 100;
}

this.off = function(){
  if(this.state == "idle" || this.state = "active"){
    this.state = "off";
  }
}

    this.on = function(){
        if(this.state == "off" && this.juice >0){
           this.state = "idle";
        }
        else if (this.state == "off" && this.juice <0
      ){
        this.state = "off";

        }
    };

this.wake = function(){
  if(this.state == "off" || this.state == "idle"){
    this.state = "active";
  }
}

this.sleep = function(){
  if(this.state == "off" || this.state == "active"){
    this.state = "idle";
  }
}

this.use = function(min){
    //adds more electricity to the device's juice depending on its state
    let use = (this.millAmps / this.capacity);
    let time = min / 60;
    if(this.state == "off"){
        let output = 1 - this.rate[0];
     }
  else if (this.state == "idle") {
        let output = 1 - this.rate[1];
  }
    }
    else if(this.state == "active"){
      let output = 1 - this.rate[2];
    }

    this.charge = function(min){
        //adds more electricity to the device's juice depending on its state
        let charge = (this.millAmps / this.capacity);
        let time = min / 60;
        if(this.state == "off"){
            let output = 1 + this.rate[0];
         }
      else if (this.state == "idle") {
            let output = 1 + this.rate[1];
      }
        }
        else if(this.state == "active"){
          let output = 1 + this.rate[2];
        }
this.juice = this.juice + charge*output*time;
        //resets juice to 1 if it has exceeded 1
        if(charge>=1){
          this.rate=0
          this.led = green
          this.charge=1
    };

}//end of the device declaration

//defines the testing code.
function main(){}
//runs the testing code.
main();
