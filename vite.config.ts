import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    server: {
      host: env.VITE_HOST || 'localhost',
      port: parseInt(env.VITE_PORT) || 3000,
      open: true,
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})