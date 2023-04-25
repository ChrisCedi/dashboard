import { Navigation } from "./routes/Navigation";
import { theme } from "./themeConfig";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
