// demo-vue/vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path' // node:path 권장

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, '../../assets')
    }
  },
  server: {
    fs: {
      // 상위 루트(draft-repo) 접근 허용
      allow: [
        path.resolve(__dirname, '.'),      // demo-vue
        path.resolve(__dirname, '../..')   // draft-repo 루트
      ]
    }
  }
})

// demo-vue/vite.config.ts
console.log('ASSETS PATH:', path.resolve(__dirname, '../../assets'))