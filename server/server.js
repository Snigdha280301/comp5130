import app from "./app.js";
import cloudinary from "cloudinary";
import https from "https";
import fs from "fs";

const PORT = process.env.PORT || 4000;

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

const sslOptions = {
  key: fs.readFileSync("./cert/localhost+2-key.pem"),
  cert: fs.readFileSync("./cert/localhost+2.pem"),
};

https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`HTTPS SERVER STARTED AT https://localhost:${PORT}`);
});