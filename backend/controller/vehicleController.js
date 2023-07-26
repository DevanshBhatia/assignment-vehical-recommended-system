const VehicleModel = require("../model/VehicleModel");
const vehicleModel = require("../model/VehicleModel");

async function createVehicleController(req, res){
    try{
        let vehicleData = req.body;
        const isDataPresent = Object.keys(vehicleData).length > 0;

        if(isDataPresent){
            let newVehicleData = await VehicleModel.create(vehicleData);
            console.log("10 VehicleController" , newVehicleData);
            res.status(201).json({
                result : "plan created",
                plan : newVehicleData
            })
        }//always remember to put else after if otherwise it gives you error
        else {
            res.status(404).json({
                message : "data is incomplete"
            })
        }
        //agr hum else nahi lagayenge toh hum log catch nahi kar payenge error ko
    }catch(err){
        console.log(err);
        res.status(500).json({ err: err.message });
    }
}

// So I have to 
   async function getAllVehicleController(req, res){
    try{
     //fetch locationid of vehicles
     let Reqlocation = req.body;
     console.log(Reqlocation);
     //fetch passenger
     let { LocationId , NoOfPassenger } = Reqlocation;

     let AllLocation = await vehicleModel.findOne({LocationId : LocationId});
     console.log(AllLocation)
     if(LocationId && NoOfPassenger){
         
         
         let newLocation = Math.abs(AllLocation - LocationId);
            console.log(newLocation);
         if(newLocation){
             
             if(AllLocation.LocationId == LocationId){
                 
                 newLocation.LocationId = undefined;
                 newLocation.NoOfPassenger = undefined;

                 console.log("All details" , newLocation);
                 
                newLocation.LocationId = undefined;
                newLocation.NoOfPassenger = undefined;
                
                
                
                }

                
            }
            res.status(200).json({
                AllLocation,
                result: "all results send"
              })

            
         }
         

        }
         catch(err){
                     console.log(err);
                     res.status(500).json({message : err.message});
                 }
                
             }
         
    
  
  
  module.exports = { 
    createVehicleController,
    getAllVehicleController
  }