import Header from './components/Header';
import { useState } from 'react';
import theme from './theme/theme';

function App() {
  const [font, setFont] = useState('Sans-Serif');
  const [darkMode, setDarkmode] = useState(false);
  const currentTheme = darkMode ? theme.dark : theme.light;

  const toggleTheme = () => {
    setDarkmode((prevDarkMode) => !prevDarkMode);
  };

  const currentFont = {
    'Sans-Serif': 'font-sans',
    Serif: 'font-serif',
    Mono: 'font-mono',
  };

  return (
    <div
      className={`content-container ${currentFont[font]} text-${currentTheme.text} bg-${currentTheme.background}`}
    >
      <Header font={font} setFont={setFont} toggleTheme={toggleTheme} darkMode={darkMode} />
    </div>
  );
}

export default App;
