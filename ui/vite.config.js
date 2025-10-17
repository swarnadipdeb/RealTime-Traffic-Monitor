import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const backendTarget = env.VITE_BACKEND_URL;
  
  return defineConfig({
  plugins: [react()],
  server: {
  port: 5173,
  host: '::',
  proxy: {
    '/api/backend': {
      target: backendTarget,
      changeOrigin: true,
      rewrite: (path) => {
        console.log('Rewriting:', path);
        return path.replace(/^\/api\/backend/, '/producer/event');
      },
    },
  }
},
 preview: {
    port: 5000,
    host: '0.0.0.0'
  }
  })};