const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //useCreateIndex: true,
    });
    console.log(`MongoDB COnnected ${conn.connection.host}`);
  } catch (error) {
    console.log("Error: ", error.message);
    process.exit();
  }
};

module.exports = connectDB;
