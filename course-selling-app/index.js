import express from "express";
import "./db.js";
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin.js";

const app = express();
const port = process.env.PORT || 3000;

app.use("/api/user", userRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
