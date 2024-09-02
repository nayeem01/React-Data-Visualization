import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import CreateCharts from "./pages/CreateCharts";

import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/charts"
          element={
            <PrivateRoute>
              <CreateCharts />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
