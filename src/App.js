import './App.css';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { applyTheme } from './styles/theme';
import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/appRoute';

const App = () => {
  useEffect(() => {
    applyTheme();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar/>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
