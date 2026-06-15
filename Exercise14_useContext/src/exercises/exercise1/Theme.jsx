import { useTheme } from './ThemeContext';
import './Theme.css';

export function Theme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="theme-container"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground
      }}
    >
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        style={{
          backgroundColor: theme.background,
          color: theme.foreground,
          borderColor: theme.foreground
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}
