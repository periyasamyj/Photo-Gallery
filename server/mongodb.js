const mongoose = require("mongoose");

const uri = "mongodb+srv://node_project:12345@cluster0.rc3fnqk.mongodb.net/photo_gallery?retryWrites=true&w=majority&appName=Cluster0";

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000,
      socketTimeoutMS: 45000,
    });

    console.log("Mongoose connected successfully");

    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to the database");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Mongoose connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose disconnected");
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

connectToDatabase();
