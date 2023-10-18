import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/ui/Footer";
import HeaderElements from "./components/ui/Header/index.jsx";
import WordsTable from "./components/ui/Main/index.jsx";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <HeaderElements />
      <div className="mainBlock">
        <Routes>
          <Route exact path="/" element={<WordsTable />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
