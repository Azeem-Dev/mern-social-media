import app from "./setup.js";
import authRoutes from "./routes/auth.js";
import userRoutes from './routes/users.js';

// ROUTES
app.use("/auth", authRoutes);
app.use("/users", userRoutes);


export default app;