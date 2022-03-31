import { Route, Routes } from "react-router-dom";
import { Details, Home } from "./pages";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/globalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div data-testid="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
