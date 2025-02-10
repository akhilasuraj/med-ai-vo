import Routes from "./routes/routes";
import { ThemeProvider } from "./Shared/Services/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <Routes />
        </ThemeProvider>
    );
}

export default App;
