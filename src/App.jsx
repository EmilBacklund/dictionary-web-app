import Header from './components/Header';
import { useEffect, useState } from 'react';
import { theme, currentFont } from './theme/theme';

function App() {
  const [font, setFont] = useState('Sans-Serif');
  const [darkMode, setDarkmode] = useState(false);
  const currentTheme = darkMode ? theme.dark : theme.light;

  useEffect(() => {
    console.log('darkMode: ', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkmode((prevDarkMode) => !prevDarkMode);
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
