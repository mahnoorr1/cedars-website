import './App.css';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { applyTheme } from './styles/theme';
import Navbar from './components/navbar';
import Home from './pages/home/home';

const App = () => {
  useEffect(() => {
    applyTheme();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar/>
        <Home/>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
