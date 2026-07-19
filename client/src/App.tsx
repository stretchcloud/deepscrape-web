import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// Deploy base ("/deepscrape-web" on GitHub Pages, "" on a custom domain root),
// derived from Vite's base config. wouter strips this prefix before matching, so
// "/" resolves to Home wherever the app is mounted — without it, the site 404s on
// GitHub Pages because the path is "/deepscrape-web/", not "/".
const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "");

function AppRoutes() {
  return (
    <Router base={routerBase}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppRoutes />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
