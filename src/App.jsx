import { AppRouter } from "@/router";
import { Sidebar, Topbar } from "@/scenes";
import { ColorModeContext, useMode } from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />

          <main className="content">
            <Topbar />

            <AppRouter />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
