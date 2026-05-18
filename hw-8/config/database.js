import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        if(!mongoURI) {
            throw new Error('Mongo URI not defined')
        }
        await mongoose.connect(mongoURI);
        console.log(mongoURI)
    } 
    catch (error) {
        console.log("Database connect -> error:", error.message);
        process.exit(1);
    }
}

// Mongoose events
mongoose.connection.on("connected", () => {
    console.log("MongoDB work");
})

mongoose.connection.on("error", (error) => {
    console.log("Database connect -> error:", error.message);
})

mongoose.connection.on("disconnect", () => {
    console.log("MongoDB => disconnect");
})

// Graceful shutdown
process.on("SIGINT", async ()=> {
    await mongoose.connection.close();
    console.log("MongoDB connection close");
    process.exit(0);
})

export default connectDB;