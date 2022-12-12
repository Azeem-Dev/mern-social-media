import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import { register } from "./controllers/auth.js";

// CONFIGURATION FOR IMPORT MODULE SETTING WE ARE USING

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CONFGIURATION FOR MIDDLEWARES
dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// FILE STORAGE

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// ROUTES WITH FILES
app.post("/auth/register", upload.single("picture"), register);

// ROUTES
app.use("/auth", authRoutes);


// MONGOOSE DATABASE

const PORT = process.env.PORT || 6001;
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGO_URL_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SERVER PORT: ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
