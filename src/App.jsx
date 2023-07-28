import { AppRouter } from "@/router";
import { Sidebar, Topbar } from "@/scenes";
import { ColorModeContext, useMode } from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SidebarProvider } from "./scenes/global/sidebar/context/SidebarProvider";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarProvider>
            <Sidebar />
          </SidebarProvider>

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
