import React from "react";
import Layout from "./routes/layout";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./services/errorboundary";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout />
    </ErrorBoundary>
  );
}

export default App;
