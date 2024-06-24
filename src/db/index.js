import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}${process.env.DB_NAME}`);
        console.log("MongoDB Connected Successful !!!\nDB Host:", connectionInstance.connection.host);
    } catch (error) {
        console.log("Error while connecting to database:\n", error);
    }
}

export default connectDB;