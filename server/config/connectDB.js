const mongoose = require("mongoose");

// async function connectDB(){
//   try {

//      console.log("Attempting to connect to MongoDB...");

//       await mongoose.connect(process.env.MONGODB_URI)

//       const connection = mongoose.connection
//       console.log(process.env.MONGODB_URI);
      
//       console.log("connection:", connection);
      
//       connection.on('connected',()=>{
//           console.log("Connect to DB")
//       })

//       connection.on('error',(error)=>{
//           console.log("Something is wrong in mongodb ",error)
//       })
//   } catch (error) {
//       console.log("Something is wrong ",error)
//   }
// }

async function connectDB() {
    try {
      console.log("Attempting to connect to MongoDB...");
  
      mongoose.connection.on('connected', () => {
        console.log("Connected to MongoDB ✅");
      });
  
      mongoose.connection.on('error', (error) => {
        console.error("MongoDB connection error ❌:", error);
      });
  
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
  
    //   console.log("MongoDB URI:", process.env.MONGODB_URI);
      
    } catch (error) {
      console.error("Something went wrong while connecting to MongoDB ❌:", error);
    }
  }
  
  

module.exports = connectDB;
