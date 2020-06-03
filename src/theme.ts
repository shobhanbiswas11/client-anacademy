import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

let theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});
theme = responsiveFontSizes(theme);

export default theme;
