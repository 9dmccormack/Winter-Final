//defines how all charging stations work.
function ChargingDock(){

//Instance variables
    this.ports = []; //finish from instructions
    this.leds = ["red","red","red","red","red","red","red","red"]; //finish from instructions


//Instance Fucntions
    this.plug = function(dvc){
        for(let p=0;p<=8;p++){
          if (this.ports[p] == "red"){
          }
        }
        if (dvc >= .99){
          dvc = "green"
        }
        if (dvc <=.99){
          dvc = "yellow";
        }
    };

    this.unplug = function(dvcIdx){
        for(d=0; d<=this.leds.length; d++){
          if(this.ports[d] == "yellow" || "green"){
            
          }
        }
    };

    this.chargeAll = function(min){
        //type in here
    };


}

//defines the testing code
function main(){}

//runs the main code
main();
