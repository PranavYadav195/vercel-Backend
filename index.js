import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js";


connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/notes", noteRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
} );  

app.listen(process.env.PORT || 5000, () => { 
  console.log(`Server is running on port ${process.env.PORT || 5000}`); 
  connectDB();
}
);