import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerConfig } from "./swaggerConfig.js";
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


// SETTING UP SWAGGER
const specs = swaggerJSDoc(swaggerConfig);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

export default app;
