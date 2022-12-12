import app from "./setup.js";
import authRoutes from "./routes/auth.js";

// ROUTES
app.use("/auth", authRoutes);


export default app;