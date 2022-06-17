import { createTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white,
    },
    primary: {
      main: '#3EA6FF',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export default theme;