//defines how all charging stations work.
function ChargingDock(){

//Instance variables
    this.ports = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]; //finish from instr
    this.leds = ["red","red","red","red","red","red","red","red"]; //finish from instructions


//Instance Fucntions
    this.plug = function(dvc){
        for(let p=0;p<=8;p++){
          if (this.leds[p] == "red"){
            this.ports.index[0] = dvc;
          }
        }
        if (this.juice > 0.99){
          this.leds[p] = "green";
        }
        if (this.juice < 0.99){
          this.leds[p] = "yellow";
        }
    };

    this.unplug = function(dvcIdx){
        for(dvcIdx=0; dvcIdx<=this.leds.length; dvcIdx++){
          if(this.leds[dvcIdx] == "yellow" || "green"){
            let temp = this.ports[dvcIdx];
            this.ports = undefined;
            this.leds[dvcIdx] = "red";
            return temp 
          }
        }
    };

    this.chargeAll = function(min){
        for(let c=0;c<=8;c++){
          if(this.leds[c] == "yellow" || "green"){
            this.charge*min;
          }
        }
        if(this.juice >= 0.99){
          this.leds[c] == "green";
        }
    };


}

//defines the testing code
function main(){}

//runs the main code
main();
