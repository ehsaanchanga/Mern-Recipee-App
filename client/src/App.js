import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import CreateRecipee from "./pages/CreateRecipee";
import SavedRecipes from "./pages/SavedRecipes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/create-recipe" element={<CreateRecipee />} />
        <Route path="/saved-recipes" element={<SavedRecipes />} />
        <Route path="*" element={<h2>Page not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
