import React from "react";
import Layout from "./Routes/Layout";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./Components/ComponentIndex";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout />
    </ErrorBoundary>
  );
}

export default App;
