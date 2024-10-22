import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";
import connectDatabase from "./src/database/connectDatabase.js";
import testRoute from "./src/routes/test.route.js";

// Dotenv configuration
dotenv.config();

// Connect MongoDB database
connectDatabase();

// REST API object
const server = express();

// Middleware
server.use(express.json());
server.use(compression());
server.use(cors());

// Test route
server.use("/api/v1", testRoute);

// Environment variable
const port = process.env.PORT;
const mode = process.env.NODE_MODE;

// Server listen 
server.listen(port, () => console.log(`Server is running successfully in ${mode} on port number ${port} at base url http://localhost:${port}`));