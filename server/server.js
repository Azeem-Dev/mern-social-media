import app from "./setup.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";

// ROUTES
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

export default app;
