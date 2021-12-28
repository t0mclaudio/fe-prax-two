import AppRoutes from "./routes";
import "./app.module.scss";
import ErrorBoundary from "./Error";

function App() {
  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  );
}

export default App;
