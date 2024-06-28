import mongoose  from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, { dbName : "EVENT_MESSAGE"})
    .then(console.log("databse connected"))
    .catch(err => console.log(err));
}