import AppErrorboundary from "./App.errorboundary";
import RouterApp from "./router";

import "./App.css";

function App() {
  return (
    <AppErrorboundary>
        <RouterApp />
    </AppErrorboundary>
  );
}

export default App;
