import "./App.css";
import NavBar from "./components/navbar.js";
import LinksPage from "./pages/linksPage.js";
import { Route, Routes } from "react-router-dom";


// UI GENERATION
function App() {
  return (
    <div className="background">
      <NavBar/>
      <Routes>
        <Route path="/" element={<LinksPage/>} />
      </Routes>
    </div>

  );
}

export default App;
