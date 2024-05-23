import { HashRouter as Router, Routes, Route } from "react-router-dom";

// import: pages
import RootPage from "./pages/RootPage/RootPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RootPage />} />
      </Routes>
    </Router>
  );
};

export default App;