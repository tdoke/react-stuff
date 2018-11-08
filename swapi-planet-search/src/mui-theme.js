import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography : {
    fontSize: 18,
    fontFamily : [
      'Lato',
      'sans-serif'
    ].join(",")
  }
})

export default theme;