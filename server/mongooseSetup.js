import mongoose from "mongoose";
mongoose.set("strictQuery", true);
const setup = mongoose.connect(process.env.MONGO_URL_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default setup;
