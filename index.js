import dotnenv from "dotenv";
import connectDB from "./src/db/index.js";
import { app } from "./app.js";

dotnenv.config({
    path: "./.env",
});

connectDB()
.then(() => {
    
    const PORT = process.env.PORT || 8080;

    app.listen(PORT, (req, res) => {
        console.log(`Server listening at port ${PORT}`);
    });
})
.catch((error) => {
    console.log("MongoDB connection Failed !!!\n", error);
})