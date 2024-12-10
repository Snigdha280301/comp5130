/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
}) 
*/

import { defineConfig } from 'vite'
import fs from 'fs'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('../server/cert/localhost+2-key.pem'), // Path to your private key
      cert: fs.readFileSync('../server/cert/localhost+2.pem'), // Path to your certificate
    },
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://localhost:4000', 
        changeOrigin: true,
        secure: false, // Ignore self-signed SSL certificates
      },
    },
  },
})






