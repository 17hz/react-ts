import { Router } from '@/routes/sections'
import { ThemeProvider } from '@/theme/theme-provider'
import { ReactQueryProvider } from '@/components/react-query-provider'

export default function App() {
  return (
    <ThemeProvider>
      <ReactQueryProvider>
        <Router />
      </ReactQueryProvider>
    </ThemeProvider>
  )
}
