
const theme = {
    colors: {
      primary: '#71FA71',
      secondary: '#00A14B',
      accent: '#09CD09',
      background: '#E6F4E9',
      text: '#1C1E1C',
      supportive: "#727070",
      black: '#1C1E1C',
      primary30: 'rgba(113, 250, 113, 0.3)',
    },
  };
  export const applyTheme = () => {
    const root = document.documentElement;
    Object.keys(theme.colors).forEach((color) => {
      root.style.setProperty(`--color-${color}`, theme.colors[color]);
    });
  };
  
  export default theme;
  