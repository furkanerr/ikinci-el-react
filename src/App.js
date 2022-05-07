import "./App.css";
import React from "react";
import { AuthProvider } from "./context/authContext";
import Routers from "./routers/routers";

function App() {
  return (
    <div className="App">
      <AuthProvider>
    
            <Routers />
     
      </AuthProvider>
    </div>
  );
}

export default App;
