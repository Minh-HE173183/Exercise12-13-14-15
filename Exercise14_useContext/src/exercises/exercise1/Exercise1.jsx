import { ThemeProvider } from './ThemeContext'
import { Theme } from './Theme'

export function Exercise1() {
  return (
    <ThemeProvider>
      <Theme />
    </ThemeProvider>
  )
}
