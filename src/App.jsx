import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SignUp from "./pages/auth/SignUp";
import Bookshelf from "./pages/bookshelf/Bookshelf";
import Error from "./components/Error";
import "./App.css";

const App = () => {
  const { auth } = useSelector((state) => state);
  const { isAuthenticated } = auth;

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Navigate to="/signup" />} />
            </>
          ) : (
            <>
              <Route path="/bookshelf" element={<Bookshelf />} />
              <Route path="/404" element={<Error />} />
              <Route path="*" element={<Navigate to="/bookshelf" />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
