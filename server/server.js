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

/*app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port: http://localhost:${PORT}`);
}); */

const sslOptions = {
  key: fs.readFileSync("./cert/localhost+2-key.pem"),
  cert: fs.readFileSync("./cert/localhost+2.pem"),
};

https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`HTTPS SERVER STARTED AT https://localhost:${PORT}`);
});


/*//Disable SSL validation globally (for development only)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import app from './app.js';
import cloudinary from 'cloudinary';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define `__dirname` using `import.meta.url`
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// Define SSL options
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'server.crt')),
};

// Use port 4000 for HTTPS
const PORT = process.env.PORT || 4000;

// Create an HTTPS server using the SSL options
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Server is running securely on https://localhost:${PORT}`);
});
*/