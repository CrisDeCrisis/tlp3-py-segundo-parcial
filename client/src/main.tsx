import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@/contexts/theme-provider.tsx"

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark">
    <App />
  </ThemeProvider>,
)
